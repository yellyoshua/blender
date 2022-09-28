import mongoose from 'mongoose';
import music_interests, {INTERESTS_REF as music_ref} from './music_interests';
import sport_interests, {INTERESTS_REF as sport_ref} from './sport_interests';
import movie_interests, {INTERESTS_REF as movie_ref} from './movie_interests';
import book_interests, {INTERESTS_REF as book_ref} from './book_interests';
import cuisine_interests, {INTERESTS_REF as cuisine_ref} from './cuisine_interests';
import beverage_interests, {INTERESTS_REF as beverage_ref} from './beverage_interests';
import hobby_interests, {INTERESTS_REF as hobby_ref} from './hobby_interests';
import religion_interests, {INTERESTS_REF as religion_ref} from './religion_interests';
import political_interests, {INTERESTS_REF as political_ref} from './political_interests';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  ...sport_ref,
  ...music_ref,
  ...movie_ref,
  ...book_ref,
  ...cuisine_ref,
  ...beverage_ref,
  ...hobby_ref,
  ...religion_ref,
  ...political_ref
};

export default [
  ...music_interests,
  ...sport_interests,
  ...movie_interests,
  ...book_interests,
  ...cuisine_interests,
  ...beverage_interests,
  ...hobby_interests,
  ...religion_interests,
  ...political_interests
];
