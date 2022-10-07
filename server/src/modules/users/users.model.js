import mongoose from 'mongoose';
import model from '../core/model.js';

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
  },
  picture: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    enum: ['twitter', 'google'],
    select: false,
    required: true
  },
  provider_user_id: {
    type: String,
    select: false,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  profile: {
    type: mongoose.Types.ObjectId,
    ref: 'profiles'
  }
}, {collection: 'users', strictQuery: false, timestamps: true, strict: true});

export const users = mongoose.model('users', usersSchema);

export default model(users, {
  populate: ''
});
