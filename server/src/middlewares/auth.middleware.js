import jsonwebtoken from '../services/jsonwebtoken.service.js';

const jwt = jsonwebtoken();

const auth_payload_key = 'auth_payload';

export default (routes = []) => {
  const privatePaths = routes.filter((route) => route.private);

  const authenticate = (req, res, next) => {
    const is_private_path = privatePaths.find((route) => {
      return (
        route.path === req.path &&
        route.method === req.method.toLowerCase()
      );
    });

    if (!is_private_path) {
      return next();
    }

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
