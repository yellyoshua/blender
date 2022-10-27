import Joi from 'joi';

export default function schemasMiddleware (schema) {
  return (req, res, next) => {
    const {error} = Joi.object(schema).validate({
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
      cookies: req.cookies,
      files: req.files
    }, {allowUnknown: true});

    if (error) {
      return next(error);
    }

    return next();
  };
}
