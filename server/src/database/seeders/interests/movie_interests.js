import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId;

export const INTERESTS_REF = {
  movie_action: id('623fb1b764fd5e550e229ee1'),
  movie_adventure: id('623fb1b764fd56e50e22fed2'),
  movie_animation: id('6d3fb1b764fd56e50e229ee3'),
  movie_biography: id('623fb1b764fd56550e2b9ee4'),
  movie_comedy: id('623fb1b764fd56df0e229de5'),
  movie_crime: id('623fb1b764fd56550e229ee6'),
  movie_documentary: id('623fb1b764fd56550e229ee7'),
  movie_drama: id('623fb1b764fd56550e229ee8'),
  movie_family: id('623fb1b764fd56550e229ee9'),
  movie_fantasy: id('623fb1b764fd56550e229eea'),
  movie_film_noir: id('623fb1b764fd56550e229eeb'),
  movie_history: id('623fb1b764fd56550e229eec'),
  movie_horror: id('623fb1b764fd56550e229eed'),
  movie_musical: id('623fb1b764fd56550e229eef'),
  movie_mystery: id('623fb1b764fd56550e229ef0'),
  movie_news: id('623fb1b764fd56550ef29ef1'),
  movie_romance: id('623fb1b764fd56550e229ef1'),
  movie_sci_fi: id('623fb1b764fd56550e229ef2'),
  movie_sport: id('623fb1b764fd56550e229ef3'),
  movie_thriller: id('623fb1b764fd56550e229ef4'),
  movie_war: id('623fb1b764fd56550e229ef5'),
  movie_western: id('623fb1b764fd56550e229ef6')
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
