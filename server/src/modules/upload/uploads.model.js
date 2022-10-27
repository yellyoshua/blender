import mongoose from 'mongoose';
import model from '../core/model.js';

const uploadsSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
    enum: [
      'profile_picture',
      'cover_picture',
      'post_picture',
      'post_video',
      'post_audio',
      'chat' 
    ]
  },
  attached_to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, {collection: 'uploads', strictQuery: false, timestamps: true, strict: true});

export const uploads = mongoose.model('uploads', uploadsSchema);

const uploads_crud = model(uploads, {populate: ''});

export default uploads_crud;
