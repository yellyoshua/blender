/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../users/users.model';
import bumpingFistsModel from '../bumping_fists/bumping_fists.model';
import users_matches from './services/users_matches';

export default {
  get: async (query, options, req) => {
    const {user_id} = req.auth_payload;

    const [[current_user], bumpingFists] = await Promise.all([
      usersModel.find({_id: user_id}, {populate: 'profile'}),
      bumpingFistsModel.find({
        emisor: user_id, status: ['pending', 'accepted', 'rejected']
      })
    ]);

    const already_bumped = _(bumpingFists).pluck('receptor');
  
    return users_matches.getPotentialMatch(current_user, already_bumped);
  }
};
