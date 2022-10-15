import {generateObjectId} from '../../utils';


export const INTERESTS_REF = {
  movie_action: generateObjectId('movie_action'),
  movie_adventure: generateObjectId('movie_adventure'),
  movie_animation: generateObjectId('movie_animation'),
  movie_biography: generateObjectId('movie_biography'),
  movie_comedy: generateObjectId('movie_comedy'),
  movie_crime: generateObjectId('movie_crime'),
  movie_documentary: generateObjectId('movie_documentary'),
  movie_drama: generateObjectId('movie_drama'),
  movie_family: generateObjectId('movie_family'),
  movie_fantasy: generateObjectId('movie_fantasy'),
  movie_film_noir: generateObjectId('movie_film_noir'),
  movie_history: generateObjectId('movie_history'),
  movie_horror: generateObjectId('movie_horror'),
  movie_musical: generateObjectId('movie_musical'),
  movie_mystery: generateObjectId('movie_mystery'),
  movie_news: generateObjectId('movie_news'),
  movie_romance: generateObjectId('movie_romance'),
  movie_sci_fi: generateObjectId('movie_sci_fi'),
  movie_sport: generateObjectId('movie_sport'),
  movie_thriller: generateObjectId('movie_thriller'),
  movie_war: generateObjectId('movie_war'),
  movie_western: generateObjectId('movie_western')
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
