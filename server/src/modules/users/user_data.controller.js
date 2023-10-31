import _ from 'underscore';
import usersModel from './users.model';
import personalitiesModel from '../personalities/personalities.models.js';
import interestsModel from '../interests/interests.model.js';

export default async function user_data (filter, options, req) {
  const [user] = await usersModel.find(
    {_id: req.auth_payload.user_id},
    {
      populate: {profile: '', profile_picture: ''},
      default_populate: true
    }
  );

  if (user.profile) {
    user.profile.interests = await interestsModel.find({_id: {$in: user.profile.interests}});
    user.profile.personalities = await personalitiesModel.find({_id: {$in: user.profile.personalities}});
  }

  user.pending_onboarding = get_pending_flows(user.profile);

  console.log('user :', JSON.stringify(user, null, 2));
  return user;
}

function get_pending_flows (profile = {}) {
  const flows = _(profile.tutorial).keys();

  return _(flows).filter((flow) => {
    return !profile.tutorial[flow];
  });
}
