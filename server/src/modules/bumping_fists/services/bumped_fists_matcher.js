import _ from 'underscore';
import bumpingFistsModel from '../bumping_fists.model';
import {toString} from '../../shared/utils';

export default {
  async bumped_as_emisor (emisor_user, receptor_user) {
    const [bumpingFist] = await bumpingFistsModel.find({
      emisor: emisor_user._id,
      receptor: receptor_user._id
    }, {populate: 'emisor receptor'});

    if (!bumpingFist) {
      await bumpingFistsModel.create({
        emisor: emisor_user._id,
        receptor: receptor_user._id,
        interests: getCommonInterests(emisor_user, receptor_user),
        personalities: getCommonPersonalities(emisor_user, receptor_user),
        status: 'pending'
      });
    }

    if (bumpingFist.status === 'accepted') {
      return bumpingFist;
    }

    return null;
  },
  async bumped_as_receptor (emisor_user, receptor_user) {
    const [bumpingFist] = await bumpingFistsModel.find({
      emisor: receptor_user._id,
      receptor: emisor_user._id
    }, {populate: 'emisor receptor'});

    if (bumpingFist && bumpingFist.status === 'pending') {
      return bumpingFistsModel.update(
        {_id: bumpingFist._id},
        {status: 'accepted'},
        {populate: 'emisor receptor'}
      );
    }

    return bumpingFist;
  }
};

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

