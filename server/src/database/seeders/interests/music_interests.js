import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  music_alternative: id('623fb1b764fd56550e229ed8'),
  music_blues: id('623fb1b764fd56550e229ed9'),
  music_classical: id('623fb1b764fd56550e229eda'),
  music_country: id('623fb1b764fd56550e229edb'),
  music_dance: id('623fb1b764fd56550e229edc'),
  music_electronic: id('623fb1b764fd56550e229edd'),
  music_folk: id('623fb1b764fd56550e229ede'),
  music_hip_hop: id('623fb1b764fd56550e229edf'),
  music_indie: id('623fb1b764fd56550e229ee0'),
  music_jazz: id('623fb1b764fd56550e229ee1'),
  music_latin: id('623fb1b764fd56550e229ee2'),
  music_metal: id('623fb1b764fd56550e229ee3'),
  music_pop: id('623fb1b764fd56550e229ee4'),
  music_punk: id('623fb1b764fd56550e229ee5'),
  music_r_and_b: id('623fb1b764fd56550e229ee6'),
  music_reggae: id('623fb1b764fd56550e229ee7'),
  music_rock: id('623fb1b764fd56550e229ee8'),
  music_soul: id('623fb1b764fd56550e229ee9'),
  music_reggaeton: id('623fb1b764fd56550e229eea'),
  music_trap: id('623fb1b764fd56550e229eeb'),
  music_salsa: id('623fb1b764fd56550e229eec'),
  music_merengue: id('623fb1b764fd56550e229eed'),
  music_bachata: id('623fb1b764fd56550e229eee'),
  music_cumbia: id('623fb1b764fd56550e229eef'),
  music_vallenato: id('623fb1b764fd56550e229ef0'),
  music_flamenco: id('623fb1b764fd56550e229ef1'),
  music_samba: id('623fb1b764fd56550e229ef2'),
  music_disco: id('623fb1b764fd56550e229ef3'),
  music_ambient: id('623fb1b764fd56550e229ef4'),
  music_romantic: id('623fb1b764fd56550e229ef5'),
  music_bolero: id('623fb1b764fd56550e229ef6'),
  music_tropical: id('623fb1b764fd56550e229ef7')
};

export default [
  {
    _id: INTERESTS_REF.music_alternative,
    type: 'music',
    name: 'Alternative'
  },
  {
    _id: INTERESTS_REF.music_blues,
    type: 'music',
    name: 'Blues'
  },
  {
    _id: INTERESTS_REF.music_classical,
    type: 'music',
    name: 'Classical'
  },
  {
    _id: INTERESTS_REF.music_country,
    type: 'music',
    name: 'Country'
  },
  {
    _id: INTERESTS_REF.music_dance,
    type: 'music',
    name: 'Dance'
  },
  {
    _id: INTERESTS_REF.music_electronic,
    type: 'music',
    name: 'Electronic'
  },
  {
    _id: INTERESTS_REF.music_folk,
    type: 'music',
    name: 'Folk'
  },
  {
    _id: INTERESTS_REF.music_hip_hop,
    type: 'music',
    name: 'Hip Hop'
  },
  {
    _id: INTERESTS_REF.music_indie,
    type: 'music',
    name: 'Indie'
  },
  {
    _id: INTERESTS_REF.music_jazz,
    type: 'music',
    name: 'Jazz'
  },
  {
    _id: INTERESTS_REF.music_latin,
    type: 'music',
    name: 'Latin'
  },
  {
    _id: INTERESTS_REF.music_metal,
    type: 'music',
    name: 'Metal'
  },
  {
    _id: INTERESTS_REF.music_pop,
    type: 'music',
    name: 'Pop'
  },
  {
    _id: INTERESTS_REF.music_punk,
    type: 'music',
    name: 'Punk'
  },
  {
    _id: INTERESTS_REF.music_r_and_b,
    type: 'music',
    name: 'R&B'
  },
  {
    _id: INTERESTS_REF.music_reggae,
    type: 'music',
    name: 'Reggae'
  },
  {
    _id: INTERESTS_REF.music_rock,
    type: 'music',
    name: 'Rock'
  },
  {
    _id: INTERESTS_REF.music_soul,
    type: 'music',
    name: 'Soul'
  },
  {
    _id: INTERESTS_REF.music_reggaeton,
    type: 'music',
    name: 'Reggaeton'
  },
  {
    _id: INTERESTS_REF.music_trap,
    type: 'music',
    name: 'Trap'
  },
  {
    _id: INTERESTS_REF.music_salsa,
    type: 'music',
    name: 'Salsa'
  },
  {
    _id: INTERESTS_REF.music_merengue,
    type: 'music',
    name: 'Merengue'
  },
  {
    _id: INTERESTS_REF.music_bachata,
    type: 'music',
    name: 'Bachata'
  },
  {
    _id: INTERESTS_REF.music_cumbia,
    type: 'music',
    name: 'Cumbia'
  },
  {
    _id: INTERESTS_REF.music_vallenato,
    type: 'music',
    name: 'Vallenato'
  },
  {
    _id: INTERESTS_REF.music_flamenco,
    type: 'music',
    name: 'Flamenco'
  },
  {
    _id: INTERESTS_REF.music_samba,
    type: 'music',
    name: 'Samba'
  },
  {
    _id: INTERESTS_REF.music_disco,
    type: 'music',
    name: 'Disco'
  },
  {
    _id: INTERESTS_REF.music_ambient,
    type: 'music',
    name: 'Ambient'
  },
  {
    _id: INTERESTS_REF.music_romantic,
    type: 'music',
    name: 'Romantic'
  },
  {
    _id: INTERESTS_REF.music_bolero,
    type: 'music',
    name: 'Bolero'
  },
  {
    _id: INTERESTS_REF.music_tropical,
    type: 'music',
    name: 'Tropical'
  }
];
