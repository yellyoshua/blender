/* eslint-disable id-length */
/* eslint-disable max-params */
import joi from 'joi';
import _ from 'underscore';
import {CustomError} from '../modules/shared/utils';

const parseError = (error) => {
  if (error instanceof CustomError) {
    return error.message;
  }

  if (error instanceof joi.ValidationError) {
    return error.details.map((detail) => detail.message);
  }

  return __t('exceptions.unexpected_error');
};

export default () => {
  return (errors, req, res, next) => {
    if (errors) {
      const parsed_errors = _([]).chain()
      .concat(errors)
      .flatten()
      .map(parseError)
      .flatten()
      .compact()
      .value();

      console.error('Errors :', parsed_errors);
      
      return res.status(500).json({
        response: null, errors: parsed_errors
      });
    }

    return next(errors);
  };
};
