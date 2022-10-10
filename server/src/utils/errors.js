/* eslint-disable id-length */
import _ from 'underscore';
import Joi from 'joi';
import {CustomError} from '../modules/shared/utils';

export const parseApiErrors = (errors) => {
  const errorClean = (error) => {
    if (error instanceof CustomError) {
      return error.message;
    }
  
    if (error instanceof Joi.ValidationError) {
      return error.details.map((detail) => detail.message);
    }
  
    return __t('exceptions.unexpected_error');
  };

  const parsed_errors = _([]).chain()
  .concat(errors)
  .flatten()
  .map(errorClean)
  .flatten()
  .compact()
  .value();

  return parsed_errors;
};
