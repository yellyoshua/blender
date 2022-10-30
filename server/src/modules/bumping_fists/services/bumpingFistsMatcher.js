/* eslint-disable id-length */
import _ from 'underscore';
import usersModel from '../../users/users.model';
import bumpingFistsModel from '../bumping_fists.model';
import {UserNotFoundException} from '../../shared/exceptions';
import {toString} from '../../shared/utils';

export default async function bumpingFistsMatcher (emisor, receptor) {
  const [emisor_user, receptor_user] = await Promise.all([
    getUser(emisor),
    getUser(receptor)
  ]);

  if (!receptor_user) {
    throw new UserNotFoundException();
  }

  const common_interests = getCommonInterests(emisor_user, receptor_user);
  const common_personalities = getCommonPersonalities(emisor_user, receptor_user);
  
  const [bumpingFist] = await bumpingFistsModel.find({
    emisor,
    receptor,
    status: 'pending'
  });

  if (bumpingFist) {
    await bumpingFistsModel.update({_id: bumpingFist._id}, {
      status: 'accepted',
      interests: common_interests,
      personalities: common_personalities
    });
    
    return bumpingFistsModel.find(
      {_id: bumpingFist._id},
      {populate: 'emisor receptor'}
    );
  }

  await bumpingFistsModel.create({
    emisor,
    receptor,
    interests: common_interests,
    personalities: common_personalities
  });

  return null;
}

function getCommonPersonalities (emisor, receptor) {
  return _(pluckIds(emisor.profile.personalities)).
  chain().
  intersection(pluckIds(receptor.profile.personalities)).
  value();
}

function getCommonInterests (emisor, receptor) {
  return _(pluckIds(emisor.profile.interests)).
  chain().
  intersection(pluckIds(receptor.profile.interests)).
  value();
}

function pluckIds (collection) {
  return _(collection).
  chain()
  .pluck('_id')
  .map(toString)
  .value();
}

async function getUser (user_id) {
  const [receptor_user] = await usersModel.find(
    {_id: user_id},
    {populate: 'profile,profile.interests,profile.personalities'}
  );

  return receptor_user;
}
