import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  movie_action: id('60061926addb44461d868721'),
  movie_adventure: id('629e658771b1ac638faf978f'),
  movie_animation: id('629e80b471b1ac638faf9d9d'),
  movie_biography: id('629f667011621b1014f98557'),
  movie_comedy: id('629f68d48d232211ba5a6a9d'),
  movie_crime: id('629f6ad48d232211ba5a6bad'),
  movie_documentary: id('629f6b8dbbd0011459f24f4a'),
  movie_drama: id('629f701abbd0011459f2510b'),
  movie_family: id('629f7895bbd0011459f252db'),
  movie_fantasy: id('53a200d451cfd2ec27000199'),
  movie_film_noir: id('53a2011651cfd2ec270001d4'),
  movie_history: id('53a2014d51cfd2ec2700020f'),
  movie_horror: id('53a2018f51cfd2ec2700024a'),
  movie_musical: id('53a201db51cfd2ec270002c0'),
  movie_mystery: id('53a2021251cfd2ec270002fb'),
  movie_news: id('53a2026d51cfd2ec27000336'),
  movie_romance: id('558b2dc22bff8102610001bd'),
  movie_sci_fi: id('558b2e0d2bff810261000253'),
  movie_sport: id('558b2e0d2bff8102610002bd'),
  movie_thriller: id('558b2e0d2bff810261000327'),
  movie_war: id('558b2e0d2bff810261000391'),
  movie_western: id('5f986b27925c9010138a4546')
};

export default [
  {
    _id: INTERESTS_REF.movie_action,
    name: 'Action',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_adventure,
    name: 'Adventure',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_animation,
    name: 'Animation',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_biography,
    name: 'Biography',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_comedy,
    name: 'Comedy',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_crime,
    name: 'Crime',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_documentary,
    name: 'Documentary',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_drama,
    name: 'Drama',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_family,
    name: 'Family',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_fantasy,
    name: 'Fantasy',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_film_noir,
    name: 'Film-Noir',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_history,
    name: 'History',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_horror,
    name: 'Horror',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_musical,
    name: 'Musical',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_mystery,
    name: 'Mystery',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_news,
    name: 'News',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_romance,
    name: 'Romance',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_sci_fi,
    name: 'Sci-Fi',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_sport,
    name: 'Sport',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_thriller,
    name: 'Thriller',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_war,
    name: 'War',
    type: 'movie'
  },
  {
    _id: INTERESTS_REF.movie_western,
    name: 'Western',
    type: 'movie'
  }
];
