/* eslint-disable id-length */
import _ from 'underscore';
import personalitiesModel from '../../personalities/personalities.models';
import {toObjectId, toString} from '../../shared/utils';

export default async function attach_profile_personalities (profile) {
  const raw_personalities = _(profile.personalities).clone();

  const personalities_found = await personalitiesModel.find({
    _id: {$in: toObjectId(raw_personalities)}
  });

  const personalities = _(personalities_found)
  .chain()
  .compact()
  .pluck('_id')
  .map(toString)
  .uniq()
  .map(toObjectId)
  .value();

  return {...profile, personalities};
}
