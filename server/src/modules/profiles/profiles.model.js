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
  picture: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  location_country: {
    type: String,
    required: true
  },
  location_city: {
    type: String,
    required: true
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
  }

}, {collection: 'profiles', strictQuery: false, timestamps: true, strict: true});

export const profiles = mongoose.model('profiles', profilesSchema);

export default model(profiles, {
  populate: ''
});
