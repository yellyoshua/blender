import mongoose from 'mongoose';
import model from '../core/model.js';

const geolocationSchema = new mongoose.Schema({
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  }
});
const profilesSchema = new mongoose.Schema({
  birthday: {
    type: Date
  },
  location_country: {
    type: String
  },
  location_city: {
    type: String
  },
  geolocation: geolocationSchema,

  company_name: {
    type: String
  },
  position_role: {
    type: String
  },
  company_address: {
    type: String
  },
  company_email: {
    type: String
  },
  company_website: {
    type: String
  },
  interests: {
    type: [mongoose.Types.ObjectId],
    ref: 'interests',
    default: []
  },
  personalities: {
    type: [mongoose.Types.ObjectId],
    ref: 'personalities',
    default: []
  },
  gender: {
    type: String,
    enum: ['M', 'F', 'X']
  }
}, {collection: 'profiles', strictQuery: false, timestamps: true, strict: true});

export const profiles = mongoose.model('profiles', profilesSchema);

export default model(profiles, {
  populate: ''
});
