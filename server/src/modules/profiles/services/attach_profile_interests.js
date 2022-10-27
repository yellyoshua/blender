/* eslint-disable id-length */
import _ from 'underscore';
import interestsModel from '../../interests/interests.model';
import {toObjectId, toString} from '../../shared/utils';

export default async function attach_profile_interests (profile) {
  const raw_interests = _(profile.interests).clone();

  const interests_found = await interestsModel.find({
    _id: {$in: toObjectId(raw_interests)}
  });

  const interests = _(interests_found)
  .chain()
  .compact()
  .pluck('_id')
  .map(toString)
  .uniq()
  .map(toObjectId)
  .value();

  return {...profile, interests};
}
