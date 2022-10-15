import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

import {createHash} from 'crypto';

export const generateObjectId = (value) => {
  const hash = createHash('sha1')
  .update(value, 'utf8')
  .digest('hex');

  return id(hash.substring(0, 24));
};
