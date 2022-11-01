import mongoose from 'mongoose';
import model from '../core/model.js';

const messagingSchema = new mongoose.Schema({
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  message: {type: String, default: ''},
  conversation: {type: mongoose.Schema.Types.ObjectId, ref: 'conversations', default: null},
  attachments: [{type: mongoose.Schema.Types.ObjectId, ref: 'uploads', default: []}],
  mark_as_read: {type: Boolean, default: false},
  mark_as_delivered: {type: Boolean, default: false},
  mark_as_spam: {type: Boolean, default: false}
  // readed_by: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', default: []}],
  // delivered_to: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', default: []}],
}, {collection: 'messaging', strictQuery: false, timestamps: true, strict: true});

messagingSchema.index({sender: 1, recipient: 1, conversation: 1}, {unique: true});

export const messaging = mongoose.model('messaging', messagingSchema);

const messaging_crud = model(messaging, {populate: ''});

export default messaging_crud;
