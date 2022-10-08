/* eslint-disable padded-blocks */
import googleAuthService from '../services/google-auth.service.js';
import jsonwebtoken from '../services/jsonwebtoken.service.js';

const jwt = jsonwebtoken();

const auth_payload_key = 'auth_payload';

export default () => {
  
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */

  return async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        errors: ['No token provided']
      });
    }

    try {
      const authorization = compose_authorization(jwt.decode(token.split(' ')[1]));
      req[auth_payload_key] = authorization;
      const authentication_func = get_provider_auth_func(authorization.provider);

      await authentication_func(authorization.access_token);

      return next();
    } catch (error) {
      return res.status(401).json({
        errors: ['Invalid token']
      });
    }
  };
};

function get_provider_auth_func (provider) {
  const authentication_func = (auth_func) => (access_token, user_id) => {
    return auth_func(access_token, user_id);
  };
  const providers_auth_func = {
    google: authentication_func(googleAuthService.getPersonData)
  };
  
  return providers_auth_func[provider];
}

function compose_authorization (authorization = {}) {
  const {user_id, access_token, provider} = authorization;
  return {user_id, access_token, provider};
}
