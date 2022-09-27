import mongoose from 'mongoose';
import music_interests, { INTERESTS_REF as music_ref } from './music_interests';
import sport_interests, { INTERESTS_REF as sport_ref } from './sport_interests';


const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  ...sport_ref,
  ...music_ref,

  movie: id('623fb1b764fd56550e229ed9'),
  book: id('623fb1b764fd56550e229eda'),
  food: id('623fb1b764fd56550e229edb'),
  drink: id('623fb1b764fd56550e229edc'),
  hobby: id('623fb1b764fd56550e229edd'),
  activity: id('623fb1b764fd56550e229ede'),
  religion: id('623fb1b764fd56550e229edf'),
  political: id('623fb1b764fd56550e229ee0')
};
const sport_genre = [



];
export default [
  ...music_interests,
  ...sport_interests,
];
