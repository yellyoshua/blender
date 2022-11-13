import Joi from 'joi';

export const updateProfileSchema = {
  body: {
    geolocation: Joi.object().keys({
      latitude: Joi.number().required(),
      longitude: Joi.number().required()
    }),
    tutorial: Joi.object().keys({
      done_geolocation: Joi.boolean(),
      done_birthdate: Joi.boolean(),
      done_add_photos: Joi.boolean(),
      done_personalize_experience: Joi.boolean(),
      done_location_country: Joi.boolean(),
      done_location_city: Joi.boolean(),
      done_interests: Joi.boolean(),
      done_personalities: Joi.boolean()
    }),
    location_country: Joi.string(),
    location_city: Joi.string(),
    birthdate: Joi.date(),
    interests: Joi.array().items(Joi.string())
    .min(5)
    .max(10),
    personalities: Joi.array().items(Joi.string())
    .min(5)
    .max(10),
    gender: Joi.string()
    .allow('M', 'F', 'X')
  }
};
