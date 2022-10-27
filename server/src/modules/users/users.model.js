import mongoose from 'mongoose';
import model from '../core/model.js';
import profilesModel from '../profiles/profiles.model.js';

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
  profile_picture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uploads',
    default: null
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

const users_crud = model(users, {populate: ''});

const users_create_parent = users_crud.create;
users_crud.create = async (data) => {
  const profile = await profilesModel.create({});

  data.profile = profile._id;

  return users_create_parent(data);
};

export default users_crud;
