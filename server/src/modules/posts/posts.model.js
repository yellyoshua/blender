import mongoose from 'mongoose';
import model from '../core/model.js';

const postsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  text: {
    type: String,
    trim: true,
    default: ''
  },
  pics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uploads',
    default: []
  }],
  status: {
    type: String,
    required: true,
    trim: true,
    enum: [
      'draft',
      'published',
      'hidden'
    ],
    default: 'draft'
  }
}, {collection: 'posts', strictQuery: false, timestamps: true, strict: true});

export const posts = mongoose.model('posts', postsSchema);

const posts_crud = model(posts, {populate: 'pics'});

export default posts_crud;
