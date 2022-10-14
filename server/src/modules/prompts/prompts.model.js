import mongoose from 'mongoose';
import model from '../core/model.js';

const promptsSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true
  }

}, {collection: 'prompts', strictQuery: false, timestamps: true, strict: true});

export const prompts = mongoose.model('prompts', promptsSchema);

export default model(prompts, {
  populate: ''
});
