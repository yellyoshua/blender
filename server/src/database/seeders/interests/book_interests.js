import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  book_action_and_adventure: id('623fb1b764fd56550e229ed1'),
  book_alternate_history: id('623fb1b764fd56550e229ed2'),
  book_anthology: id('623fb1b764fd56550e229ed3'),
  book_chick_lit: id('623fb1b764fd56550e229ed4'),
  book_childrens: id('623fb1b764fd56550e229ed5'),
  book_classics: id('623fb1b764fd56550e229ed6'),
  book_comic_book_or_graphic_novel: id('623fb1b764fd56550e229ed7'),
  book_coming_of_age: id('623fb1b764fd56550e229ed8'),
  book_crime: id('623fb1b764fd56550e229ed9'),
  book_drama: id('623fb1b764fd56550e229eda'),
  book_fairytale: id('623fb1b764fd56550e229edb'),
  book_fantasy: id('623fb1b764fd56550e229edc'),
  book_graphic_novel: id('623fb1b764fd56550e229edd'),
  book_historical_fiction: id('623fb1b764fd56550e229ede'),
  book_horror: id('623fb1b764fd56550e229edf'),
  book_humor: id('623fb1b764fd56550e229ee0'),
  book_literary_fiction: id('623fb1b764fd56550e229ee1'),
  book_mystery: id('623fb1b764fd56550e229ee2'),
  book_paranormal: id('623fb1b764fd56550e229ee3'),
  book_picture_book: id('623fb1b764fd56550e229ee4'),
  book_poetry: id('623fb1b764fd56550e229ee5'),
  book_political_thriller: id('623fb1b764fd56550e229ee6'),
  book_romance: id('623fb1b764fd56550e229ee7'),
  book_satire: id('623fb1b764fd56550e229ee8'),
  book_science_fiction: id('623fb1b764fd56550e229ee9'),
  book_short_story: id('623fb1b764fd56550e229eea'),
  book_suspense: id('623fb1b764fd56550e229eeb'),
  book_thriller: id('623fb1b764fd56550e229eec'),
  book_western: id('623fb1b764fd56550e229eed'),
  book_young_adult: id('623fb1b764fd56550e229eee')
};

export default [
  {
    _id: INTERESTS_REF.book_action_and_adventure,
    name: 'Action and Adventure',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_alternate_history,
    name: 'Alternate History',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_anthology,
    name: 'Anthology',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_chick_lit,
    name: 'Chick Lit',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_childrens,
    name: 'Childrens',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_classics,
    name: 'Classics',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_comic_book_or_graphic_novel,
    name: 'Comic Book or Graphic Novel',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_coming_of_age,
    name: 'Coming of Age',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_crime,
    name: 'Crime',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_drama,
    name: 'Drama',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_fairytale,
    name: 'Fairytale',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_fantasy,
    name: 'Fantasy',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_graphic_novel,
    name: 'Graphic Novel',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_historical_fiction,
    name: 'Historical Fiction',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_horror,
    name: 'Horror',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_humor,
    name: 'Humor',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_literary_fiction,
    name: 'Literary Fiction',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_mystery,
    name: 'Mystery',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_paranormal,
    name: 'Paranormal',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_picture_book,
    name: 'Picture Book',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_poetry,
    name: 'Poetry',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_political_thriller,
    name: 'Political Thriller',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_romance,
    name: 'Romance',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_satire,
    name: 'Satire',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_science_fiction,
    name: 'Science Fiction',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_short_story,
    name: 'Short Story',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_suspense,
    name: 'Suspense',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_thriller,
    name: 'Thriller',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_western,
    name: 'Western',
    type: 'book'
  },
  {
    _id: INTERESTS_REF.book_young_adult,
    name: 'Young Adult',
    type: 'book'
  }
];
