/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../users/users.model';
import bumpingFistsModel from '../bumping_fists/bumping_fists.model';

export default {
  get: async (query, options, req) => {
    const {user_id} = req.auth_payload;

    const bumpingFists = await bumpingFistsModel.find(
      {emisor: user_id, status: 'pending'},
      {populate: 'receptor'}
    );

    const already_bumped = _(bumpingFists).pluck('receptor');

    const [current_user] = await usersModel.find(
      {_id: user_id},
      {populate: 'profile,profile.interests,profile.personalities'}
    );
    
    const potential_matches = await usersModel.find(
      {
        _id: {$nin: [user_id, ...already_bumped]},
        'profile.interests': {$in: current_user.profile.interests},
        'profile.personalities': {$in: current_user.profile.personalities}
      },
      {populate: 'profile,profile.interests,profile.personalities'}
    );

    return potential_matches;
  }
};
