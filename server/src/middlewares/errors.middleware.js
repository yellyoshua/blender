/* eslint-disable max-params */
import joi from 'joi';
import {CustomError} from '../modules/shared/utils';

const {ValidationError} = joi;

const parseError = (error) => {
  if (error instanceof CustomError) {
    return error.message;
  }

  if (error instanceof ValidationError) {
    return error.details.map((detail) => detail.message);
  }
  
  console.log('error', error);
  console.error(error);

  return __t('exceptions.unexpected_error');
};

export default () => {
  return (errors, req, res, next) => {
    if (errors) {
      const parsed_errors = [];
    
      if (errors && Array.isArray(errors)) {
        errors.forEach((error) => {
          parsed_errors.push(parseError(error));
        });
      } else {
        parsed_errors.push(parseError(errors));
      }
  
      return res.status(500).json({
        response: null, errors: parsed_errors.flat(2)
      });
    }

    return next(errors);
  };
};
