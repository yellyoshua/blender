import mongoose from 'mongoose';
import model from '../core/model.js';

const personalitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }

}, {collection: 'personalities', strictQuery: false, timestamps: true, strict: true});

export const personalities = mongoose.model('personalities', personalitiesSchema);

export default model(personalities, {
  populate: ''
});
