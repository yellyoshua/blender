import mongoose from 'mongoose';
import model from '../core/model.js';

const bumpingFistsSchema = new mongoose.Schema({
  emisor: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  receptor: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  status: {type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending'},
  interests: [{type: mongoose.Schema.Types.ObjectId, ref: 'interests', default: []}],
  personalities: [{type: mongoose.Schema.Types.ObjectId, ref: 'personalities', default: []}],
  messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'messages', default: []}]
}, {collection: 'bumping_fists', strictQuery: false, timestamps: true, strict: true});

bumpingFistsSchema.index({emisor: 1, receptor: 1}, {unique: true});

export const bumping_fists = mongoose.model('bumping_fists', bumpingFistsSchema);

const bumping_fists_crud = model(bumping_fists, {populate: ''});

export default bumping_fists_crud;
