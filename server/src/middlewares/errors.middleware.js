/* eslint-disable max-params */
import {parseApiErrors} from '../utils/errors';

export default () => {
  return (errors, req, res, next) => {
    if (errors) {
      const parsed_errors = parseApiErrors(errors);

      console.error('Errors :', errors);
      
      return res.status(500).json({
        response: null, errors: parsed_errors
      });
    }

    return next(errors);
  };
};
