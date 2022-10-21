import mongoose from 'mongoose';
import model from '../core/model.js';

const matchesSchema = new mongoose.Schema({
  matches: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: true,
    default: []
  },
  common_interests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'interests',
    required: true,
    default: []
  },
  common_personalities: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'personalities',
    required: true,
    default: []
  }
}, {collection: 'matches', strictQuery: false, timestamps: true, strict: true});

export const matches = mongoose.model('matches', matchesSchema);

const matches_crud = model(matches, {populate: ''});

export default matches_crud;
