/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../users/users.model';
import bumpingFistsModel from '../bumping_fists/bumping_fists.model';
import users_matches from './services/users_matches';

export default {
  get: async (query, options, req) => {
    const {user_id} = req.auth_payload;

    const [current_user] = await usersModel.find(
      {_id: user_id},
      {populate: 'profile'}
    );

    const bumpingFists = await bumpingFistsModel.find(
      {emisor: current_user._id, status: 'pending'},
      {populate: 'receptor'}
    );

    const already_bumped = _(bumpingFists).pluck('receptor');

    const possible_matches = await users_matches.getMatches(current_user, already_bumped);
  
    return possible_matches;
  }
};
