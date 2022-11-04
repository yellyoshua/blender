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

const tutorialSchema = new mongoose.Schema({
  done_birthdate: {
    type: Boolean,
    default: false
  },
  done_add_photos: {
    type: Boolean,
    default: false
  },
  done_personalize_experience: {
    type: Boolean,
    default: false
  },
  done_location_country: {
    type: Boolean,
    default: false
  },
  done_location_city: {
    type: Boolean,
    default: false
  },
  done_geolocation: {
    type: Boolean,
    default: false
  },
  done_interests: {
    type: Boolean,
    default: false
  },
  done_personalities: {
    type: Boolean,
    default: false
  }
});

const profilesSchema = new mongoose.Schema({
  tutorial: {
    type: tutorialSchema,
    default: {}
  },
  birthdate: {
    type: Date
  },
  location_country: {
    type: String
  },
  location_city: {
    type: String
  },
  geolocation: {
    type: geolocationSchema,
    default: {}
  },
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

const profiles_crud = model(profiles, {populate: ''});

export default profiles_crud;
