import usersModel from '../users/users.model';
import bumpingFistsModel from './bumping_fists.model';
import bumped_fists_matcher from './services/bumped_fists_matcher';
import {UserNotFoundException} from '../shared/exceptions';

export default {
  find: bumpingFistsModel.find,
  async create (body, req) {
    const emisor = req.auth_payload.user_id;
    const receptor = body.receptor;

    const [emisor_user, receptor_user] = await Promise.all([
      getUser(emisor),
      getUser(receptor)
    ]);
  
    if (!receptor_user) {
      throw new UserNotFoundException();
    }

    const match_requested = await bumped_fists_matcher.bumped_as_receptor(emisor_user, receptor_user);
    if (match_requested) {
      return match_requested;
    }

    return bumped_fists_matcher.bumped_as_emisor(emisor_user, receptor_user);
  }
};

async function getUser (user_id) {
  const [receptor_user] = await usersModel.find(
    {_id: user_id},
    {populate: 'profile,profile.interests,profile.personalities'}
  );

  return receptor_user;
}
