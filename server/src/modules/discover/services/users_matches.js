/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../../users/users.model';

export default {
  async getMatches (current_user, already_bumped_users) {
    const profilesMatches = await usersModel.raw.aggregate([
      {
        $match: {
          _id: {$nin: [current_user._id, already_bumped_users]},
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
          'profile.interests': {$in: current_user.profile.interests},
          'profile.personalities': {$in: current_user.profile.personalities}
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
          profile: {
            interests: 1,
            personalities: 1,
            gender: 1,
            location_city: 1,
            location_country: 1
          }
        }
      }
    ]).exec();

    const matches = _(profilesMatches).map((match) => {
      const common_interests = getCommonInterests(current_user, match);
      const common_personalities = getCommonPersonalities(current_user, match);

      const count_user_interests = current_user.profile.interests.length;
      const count_user_personalities = current_user.profile.personalities.length;

      const count_common_interests = common_interests.length;
      const count_common_personalities = common_personalities.length;

      const percentage_interests = (count_common_interests / count_user_interests) * 100;
      const percentage_personalities = (count_common_personalities / count_user_personalities) * 100;

      const percentage = (percentage_interests + percentage_personalities) / 2;

      return {
        ...match,
        common_interests,
        common_personalities,
        percentage: percentage.toFixed(2),
        percentage_interests: percentage_interests.toFixed(2),
        percentage_personalities: percentage_personalities.toFixed(2)
      };
    });

    return matches;
  }
};

function getCommonInterests (current_user, match) {
  return _(match.profile.interests).filter((interest) => {
    const interests = current_user.profile.interests.map(to_string);
    return _(interests).include(to_string(interest._id));
  });
}

function getCommonPersonalities (current_user, match) {
  return _(match.profile.personalities).filter((personality) => {
    const personalities = current_user.profile.personalities.map(to_string);
    return _(personalities).include(to_string(personality._id));
  });
}

function to_string (value) {
  return value.toString();
}
