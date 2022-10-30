/* eslint-disable max-lines-per-function */
/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../../users/users.model';
import math from '../../shared/utils/math';

export default {
  async getPotentialMatch (current_user, already_bumped_users) {
    const profilesMatches = await usersModel.raw.aggregate([
      {
        $match: {
          _id: {$nin: _([current_user._id, already_bumped_users]).flatten()},
          is_active: true
        }
      },
      {
        $lookup: {
          from: 'profiles',
          localField: 'profile',
          foreignField: '_id',
          as: 'profile'
        }
      },
      {
        $unwind: '$profile'
      },
      {
        $match: {
          'profile.tutorial.done_birthday': true,
          'profile.tutorial.done_geolocation': true,
          'profile.tutorial.done_interests': true,
          'profile.tutorial.done_personalities': true,
          'profile.tutorial.done_personalize_experience': true
        }
      },
      {
        $addFields: {
          common_interests: {
            $setIntersection: [
              '$profile.interests',
              current_user.profile.interests
            ]
          },
          common_personalities: {
            $setIntersection: [
              '$profile.personalities',
              current_user.profile.personalities
            ]
          }
        }
      },
      {
        $lookup: {
          from: 'interests',
          localField: 'profile.interests',
          foreignField: '_id',
          as: 'profile.interests'
        }
      },
      {
        $lookup: {
          from: 'personalities',
          localField: 'profile.personalities',
          foreignField: '_id',
          as: 'profile.personalities'
        }
      },
      {
        $project: {
          _id: 1,
          first_name: 1,
          last_name: 1,
          picture: 1,
          common_interests: 1,
          common_personalities: 1,
          profile: {
            interests: 1,
            personalities: 1,
            gender: 1,
            birthday: 1,
            location_city: 1,
            location_country: 1
          }
        }
      }
    ]).exec();

    const potential_match = _(profilesMatches)
    .chain()
    .shuffle()
    .first()
    .value();

    if (!potential_match) {
      return null;
    }

    const common_interests = getCommonInterests(current_user, potential_match);
    const common_personalities = getCommonPersonalities(current_user, potential_match);

    const count_user_interests = current_user.profile.interests.length;
    const count_user_personalities = current_user.profile.personalities.length;

    const percentage_interests = math.percentage(common_interests.length, count_user_interests, 2);
    const percentage_personalities = math.percentage(common_personalities.length, count_user_personalities, 2);

    const percentage = math.average(percentage_interests, percentage_personalities);

    return {
      ...potential_match,
      common_interests,
      common_personalities,
      percentage,
      percentage_interests,
      percentage_personalities
    };
  }
};

function percentageMoreThan (percentage) {
  return (match) => {
    return match.percentage >= percentage;
  };
}

function getCommonInterests (current_user, match) {
  return _(match.profile.interests).filter((interest) => {
    const common_interests = _(match.common_interests).map(to_string);
    return _(common_interests).include(to_string(interest._id));
  });
}

function getCommonPersonalities (current_user, match) {
  return _(match.profile.personalities).filter((personality) => {
    const common_personalities = _(match.common_personalities).map(to_string);
    return _(common_personalities).include(to_string(personality._id));
  });
}

function to_string (value) {
  return value.toString();
}
