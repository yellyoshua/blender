import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  music_alternative: id('56955ab45dd32c04191a8004'),
  music_blues: id('56955ab45dd32c04191a8006'),
  music_classical: id('56955ab45dd32c04191a8009'),
  music_country: id('59381ffa6142f3385ab29dda'),
  music_dance: id('5a0c9e91c80b446e6cc2b1d8'),
  music_electronic: id('5f986267d078350dfa48bc3e'),
  music_folk: id('5f9864da925c9010138a43f1'),
  music_hip_hop: id('5f986724925c9010138a43f7'),
  music_indie: id('5f98677c925c9010138a440e'),
  music_jazz: id('5f9867a2925c9010138a441c'),
  music_latin: id('5f98680e925c9010138a4428'),
  music_metal: id('5f98686f925c9010138a4434'),
  music_pop: id('5f9868c5925c9010138a4440'),
  music_punk: id('5f9868f9925c9010138a444c'),
  music_r_and_b: id('5f986921925c9010138a4458'),
  music_reggae: id('5f986955925c9010138a4464'),
  music_rock: id('5f98697d925c9010138a4470'),
  music_soul: id('5f9869a5925c9010138a447c'),
  music_reggaeton: id('5fa45bdb49fc774d64492fa4'),
  music_trap: id('5fa45d6049fc774d64492fb2'),
  music_salsa: id('5fa461af49fc774d6449300d'),
  music_merengue: id('6006130caddb44461d8685cc'),
  music_bachata: id('6006151aaddb44461d868691'),
  music_cumbia: id('60061543addb44461d868694'),
  music_vallenato: id('60061571addb44461d868696'),
  music_flamenco: id('600615a2addb44461d868698'),
  music_samba: id('600616c7addb44461d8686a2'),
  music_disco: id('60061733addb44461d8686a5'),
  music_ambient: id('6006178aaddb44461d8686bd'),
  music_romantic: id('600617e9addb44461d8686cb'),
  music_bolero: id('6006183aaddb44461d8686d7'),
  music_tropical: id('600618b3addb44461d8686ee')
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
