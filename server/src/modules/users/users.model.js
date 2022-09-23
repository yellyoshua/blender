import mongoose from 'mongoose';
import model from '../core/model.js';

const usersSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    required: true
  },
  gender: {
    type: String,
    required: true
  }
}, {collection: 'users', strictQuery: false});

export const users = mongoose.model('users', usersSchema);

export default model(users);
