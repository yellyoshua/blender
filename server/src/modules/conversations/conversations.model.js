import mongoose from 'mongoose';
import model from '../core/model.js';

const conversationsSchema = new mongoose.Schema({
  participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', default: []}]
}, {collection: 'conversations', strictQuery: false, timestamps: true, strict: true});

export const conversations = mongoose.model('conversations', conversationsSchema);

const conversations_crud = model(conversations, {populate: ''});

export default conversations_crud;
