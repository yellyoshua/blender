import jsonwebtoken from '../services/jsonwebtoken.service.js';

const jwt = jsonwebtoken();

const auth_payload_key = 'auth_payload';

export default () => {
  const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        errors: ['No token provided']
      });
    }

    try {
      req[auth_payload_key] = jwt.decode(token.split(' ')[1]);

      return next();
    } catch (error) {
      return res.status(401).json({
        errors: ['Invalid token']
      });
    }
  };

  return authenticate;
};
