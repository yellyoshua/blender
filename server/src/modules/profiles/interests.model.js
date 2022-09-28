import mongoose from 'mongoose';
import model from '../core/model.js';

const interestsSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'sport',
      'music',
      'movie',
      'book',
      'cuisine',
      'beverage',
      'hobby',
      'religion',
      'political'
    ],
    required: true
  },
  name: {
    type: String,
    required: true
  }

}, {collection: 'interests', strictQuery: false, timestamps: true, strict: true});

export const interests = mongoose.model('interests', interestsSchema);

export default model(interests, {
  populate: ''
});
