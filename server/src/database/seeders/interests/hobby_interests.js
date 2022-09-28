import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  hobby_art: id('53ea404936e9abb40c000188'),
  hobby_collecting: id('53ea41259aadb8ac0c0000cc'),
  hobby_cooking: id('53ea46999aadb8ac0c0000fb'),
  hobby_crafts: id('53ea4bed46f584b80c00015c'),
  hobby_dancing: id('53ea5d9546f584b80c0001c1'),
  hobby_drawing: id('53ea5d9b36e9abb40c0001ef'),
  hobby_fashion: id('53ea6116a51beeb00c000179'),
  hobby_fishing: id('53ea612d46f584b80c0001e5'),
  hobby_gaming: id('53ea61caa51beeb00c00017b'),
  hobby_gardening: id('53ea62e736e9abb40c000234'),
  hobby_home_improvement: id('53ea63d69aadb8ac0c00013f'),
  hobby_painting: id('53ea66c39aadb8ac0c000168'),
  hobby_photography: id('53ea670c46f584b80c00023b'),
  hobby_sewing: id('53ea6bd246f584b80c000269'),
  hobby_shopping: id('53ea6eb19aadb8ac0c0001c4'),
  hobby_singing: id('53594eba5768ea9f5900001f'),
  hobby_sculpting: id('53aaf71275c4d7fd0c000030'),
  hobby_traveling: id('53d54f22f1d5ea8773000328'),
  hobby_reading: id('53d54f22f1d5ea877300032c'),
  hobby_writing: id('53ea224636e9abb40c000050'),
  hobby_learning_new_languages: id('53ea305536e9abb40c0000de'),
  hobby_playing_an_instrument: id('53ea327c9aadb8ac0c00006b'),
  hobby_camping: id('53ea3edc9aadb8ac0c0000b8')
};

export default [
  {
    _id: INTERESTS_REF.hobby_art,
    name: 'Art',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_collecting,
    name: 'Collecting',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_cooking,
    name: 'Cooking',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_crafts,
    name: 'Crafts',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_dancing,
    name: 'Dancing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_drawing,
    name: 'Drawing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_fashion,
    name: 'Fashion',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_fishing,
    name: 'Fishing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_gaming,
    name: 'Gaming',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_gardening,
    name: 'Gardening',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_home_improvement,
    name: 'Home Improvement',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_painting,
    name: 'Painting',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_photography,
    name: 'Photography',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_sewing,
    name: 'Sewing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_shopping,
    name: 'Shopping',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_singing,
    name: 'Singing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_sculpting,
    name: 'Sculpting',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_traveling,
    name: 'Traveling',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_reading,
    name: 'Reading',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_writing,
    name: 'Writing',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_learning_new_languages,
    name: 'Learning New Languages',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_playing_an_instrument,
    name: 'Playing an Instrument',
    type: 'hobby'
  },
  {
    _id: INTERESTS_REF.hobby_camping,
    name: 'Camping',
    type: 'hobby'
  }
];
