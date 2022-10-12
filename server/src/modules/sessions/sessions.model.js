import mongoose from 'mongoose';
import model from '../core/model.js';
import {expires_in_days} from '../../utils/dates';

const sessionsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  expires: {
    type: Date,
    default: expires_in_days(7)
  },
  ip: {
    type: String,
    required: true
  },
  user_agent: {
    type: String,
    required: true
  }
}, {collection: 'sessions', strictQuery: false, timestamps: true, strict: true});

export const sessions = mongoose.model('sessions', sessionsSchema);

export default model(sessions, {populate: ''});
