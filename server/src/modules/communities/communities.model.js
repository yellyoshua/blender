import mongoose from 'mongoose';
import model from '../core/model.js';

const communitiesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', default: []}],
  topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'topics', default: []}],  
  interests: [{type: mongoose.Schema.Types.ObjectId, ref: 'interests', default: []}]
}, {collection: 'communities', strictQuery: false, timestamps: true, strict: true});

export const communities = mongoose.model('communities', communitiesSchema);

const communities_crud = model(communities, {populate: ''});

export default communities_crud;
