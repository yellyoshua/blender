import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  book_action_and_adventure: id('53641a925260549b59000028'),
  book_alternate_history: id('53d54f22f1d5ea8773000335'),
  book_anthology: id('53ea256f9aadb8ac0c00003d'),
  book_chick_lit: id('53ea2a5336e9abb40c00008c'),
  book_childrens: id('53ea2b0046f584b80c000057'),
  book_classics: id('53ea2eef9aadb8ac0c00004c'),
  book_comic_book_or_graphic_novel: id('53ea32ff36e9abb40c00010b'),
  book_coming_of_age: id('53ea3c5d36e9abb40c000158'),
  book_crime: id('53ea40a19aadb8ac0c0000c7'),
  book_drama: id('53ea41da9aadb8ac0c0000d0'),
  book_fairytale: id('53ea428046f584b80c0000cb'),
  book_fantasy: id('53ea42d136e9abb40c00018e'),
  book_graphic_novel: id('53ea43c146f584b80c0000fa'),
  book_historical_fiction: id('53ea457946f584b80c000109'),
  book_horror: id('53ea474a46f584b80c000127'),
  book_humor: id('53ea557946f584b80c000169'),
  book_literary_fiction: id('53ea5679a51beeb00c00011d'),
  book_mystery: id('53ea5c7346f584b80c0001bf'),
  book_paranormal: id('53ea5f90a51beeb00c000168'),
  book_picture_book: id('53ea6af89aadb8ac0c00016e'),
  book_poetry: id('53ea6ca1a51beeb00c0001cd'),
  book_political_thriller: id('53ea70e736e9abb40c000296'),
  book_romance: id('53ea747fa51beeb00c00023c'),
  book_satire: id('53ea749ca51beeb00c00023e'),
  book_science_fiction: id('53d54f22f1d5ea8773000329'),
  book_short_story: id('53d54f22f1d5ea877300032b'),
  book_suspense: id('53ea261ca51beeb00c000041'),
  book_thriller: id('53ea318346f584b80c000066'),
  book_western: id('53ea3def9aadb8ac0c00009e'),
  book_young_adult: id('53ea3e379aadb8ac0c0000a9')
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
