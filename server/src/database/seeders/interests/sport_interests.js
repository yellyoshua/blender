import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  sport_american_football: id('53a0a5c3866a2d582cc379ae'),
  sport_archery: id('53a0a8665dc899392c00004d'),
  sport_athletics: id('53a0b1cf8e97d4b22e000031'),
  sport_badminton: id('53a1a4222a872ba91200002f'),
  sport_baseball: id('53a1bece7922dbfd1f000033'),
  sport_basketball: id('53a1c31151cfd2ec2700002c'),
  sport_boxing: id('53a1c93751cfd2ec27000037'),
  sport_canoeing: id('53a1cacb51cfd2ec2700003d'),
  sport_cycling: id('53a1da6f51cfd2ec27000048'),
  sport_diving: id('53a1df6351cfd2ec27000050'),
  sport_equestrian: id('53a1eb3751cfd2ec27000143'),
  sport_fencing: id('53a1ec5951cfd2ec27000147'),
  sport_football: id('53d27b4a2c6c197fa000002f'),
  sport_golf: id('53d27b4a2c6c197fa0000030'),
  sport_gymnastics: id('53d27b4a2c6c197fa0000031'),
  sport_handball: id('53d27b4a2c6c197fa0000032'),
  sport_hockey: id('53d27b4a2c6c197fa0000033'),
  sport_judo: id('53d27b4a2c6c197fa0000034'),
  sport_martial_arts: id('53d27b4a2c6c197fa0000035'),
  sport_motorcycle_racing: id('53d27b4a2c6c197fa0000036'),
  sport_polo: id('53d27b4a2c6c197fa0000037'),
  sport_racquetball: id('53d27b4a2c6c197fa0000038'),
  sport_rowing: id('53d27b4a2c6c197fa0000039'),
  sport_rugby: id('53d27b4a2c6c197fa000003a'),
  sport_shooting: id('53d27b4a2c6c197fa000003b'),
  sport_skateboarding: id('53d27b4a2c6c197fa000003c'),
  sport_skiing: id('53d27b4a2c6c197fa000003d'),
  sport_snowboarding: id('53d27b4a2c6c197fa000003e'),
  sport_skating: id('53d27b4a2c6c197fa000003f'),
  sport_squash: id('53d27b4a2c6c197fa0000040'),
  sport_swimming: id('53d27b4a2c6c197fa0000041'),
  sport_taekwondo: id('53d27b4a2c6c197fa0000042'),
  sport_tennis: id('53d27b4a2c6c197fa0000043'),
  sport_triathlon: id('53d27b4a2c6c197fa0000044'),
  sport_volleyball: id('53d27b4a2c6c197fa0000045'),
  sport_waterpolo: id('53d27b4a2c6c197fa0000046'),
  sport_padel: id('53d27b4a2c6c197fa0000047'),
  sport_ping_pong: id('558b2a0c2bff81026100003f'),
  sport_paintball: id('558b2a9d2bff81026100004b'),
  sport_yoga: id('558b2d552bff810261000193'),
  sport_pilates: id('5669f2bbf940396a468789ed')
};

export default [
  {
    _id: INTERESTS_REF.sport_american_football,
    type: 'sport',
    name: 'American Football'
  },
  {
    _id: INTERESTS_REF.sport_archery,
    type: 'sport',
    name: 'Archery'
  },
  {
    _id: INTERESTS_REF.sport_athletics,
    type: 'sport',
    name: 'Athletics'
  },
  {
    _id: INTERESTS_REF.sport_badminton,
    type: 'sport',
    name: 'Badminton'
  },
  {
    _id: INTERESTS_REF.sport_baseball,
    type: 'sport',
    name: 'Baseball'
  },
  {
    _id: INTERESTS_REF.sport_basketball,
    type: 'sport',
    name: 'Basketball'
  },
  {
    _id: INTERESTS_REF.sport_boxing,
    type: 'sport',
    name: 'Boxing'
  },
  {
    _id: INTERESTS_REF.sport_canoeing,
    type: 'sport',
    name: 'Canoeing'
  },
  {
    _id: INTERESTS_REF.sport_cycling,
    type: 'sport',
    name: 'Cycling'
  },
  {
    _id: INTERESTS_REF.sport_diving,
    type: 'sport',
    name: 'Diving'
  },
  {
    _id: INTERESTS_REF.sport_equestrian,
    type: 'sport',
    name: 'Equestrian'
  },
  {
    _id: INTERESTS_REF.sport_fencing,
    type: 'sport',
    name: 'Fencing'
  },
  {
    _id: INTERESTS_REF.sport_football,
    type: 'sport',
    name: 'Football'
  },
  {
    _id: INTERESTS_REF.sport_golf,
    type: 'sport',
    name: 'Golf'
  },
  {
    _id: INTERESTS_REF.sport_gymnastics,
    type: 'sport',
    name: 'Gymnastics'
  },
  {
    _id: INTERESTS_REF.sport_handball,
    type: 'sport',
    name: 'Handball'
  },
  {
    _id: INTERESTS_REF.sport_hockey,
    type: 'sport',
    name: 'Hockey'
  },
  {
    _id: INTERESTS_REF.sport_judo,
    type: 'sport',
    name: 'Judo'
  },
  {
    _id: INTERESTS_REF.sport_martial_arts,
    type: 'sport',
    name: 'Martial Arts'
  },
  {
    _id: INTERESTS_REF.sport_motorcycle_racing,
    type: 'sport',
    name: 'Motorcycle Racing'
  },
  {
    _id: INTERESTS_REF.sport_polo,
    type: 'sport',
    name: 'Polo'
  },
  {
    _id: INTERESTS_REF.sport_racquetball,
    type: 'sport',
    name: 'Racquetball'
  },
  {
    _id: INTERESTS_REF.sport_rowing,
    type: 'sport',
    name: 'Rowing'
  },
  {
    _id: INTERESTS_REF.sport_rugby,
    type: 'sport',
    name: 'Rugby'
  },
  {
    _id: INTERESTS_REF.sport_shooting,
    type: 'sport',
    name: 'Shooting'
  },
  {
    _id: INTERESTS_REF.sport_skateboarding,
    type: 'sport',
    name: 'Skateboarding'
  },
  {
    _id: INTERESTS_REF.sport_skiing,
    type: 'sport',
    name: 'Skiing'
  },
  {
    _id: INTERESTS_REF.sport_snowboarding,
    type: 'sport',
    name: 'Snowboarding'
  },
  {
    _id: INTERESTS_REF.sport_skating,
    type: 'sport',
    name: 'Skating'
  },
  {
    _id: INTERESTS_REF.sport_squash,
    type: 'sport',
    name: 'Squash'
  },
  {
    _id: INTERESTS_REF.sport_swimming,
    type: 'sport',
    name: 'Swimming'
  },
  {
    _id: INTERESTS_REF.sport_taekwondo,
    type: 'sport',
    name: 'Taekwondo'
  },
  {
    _id: INTERESTS_REF.sport_tennis,
    type: 'sport',
    name: 'Tennis'
  },
  {
    _id: INTERESTS_REF.sport_triathlon,
    type: 'sport',
    name: 'Triathlon'
  },
  {
    _id: INTERESTS_REF.sport_volleyball,
    type: 'sport',
    name: 'Volleyball'
  },
  {
    _id: INTERESTS_REF.sport_waterpolo,
    type: 'sport',
    name: 'Waterpolo'
  },
  {
    _id: INTERESTS_REF.sport_padel,
    type: 'sport',
    name: 'Padel'
  },
  {
    _id: INTERESTS_REF.sport_ping_pong,
    type: 'sport',
    name: 'Ping Pong'
  },
  {
    _id: INTERESTS_REF.sport_paintball,
    type: 'sport',
    name: 'Paintball'
  },
  {
    _id: INTERESTS_REF.sport_yoga,
    type: 'sport',
    name: 'Yoga'
  },
  {
    _id: INTERESTS_REF.sport_pilates,
    type: 'sport',
    name: 'Pilates'
  }
];
