/* eslint-disable padded-blocks */
import jsonwebtoken from '../services/jsonwebtoken.service.js';
import sessionsModel from '../modules/sessions/sessions.model.js';
import {NoTokenProvidedException, SessionNotFoundException} from '../modules/shared/exceptions';

const jwt = jsonwebtoken();

const auth_payload_key = 'auth_payload';

export default () => {
  
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */

  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return next(new NoTokenProvidedException());
      }

      const token_payload = jwt.decode(token.split(' ')[1]);
      const authorization = compose_authorization(token_payload);
      req[auth_payload_key] = authorization;

      const [session] = await sessionsModel.find({
        _id: authorization.session_id,
        user: authorization.user_id
      });

      if (!session) {
        return next(new SessionNotFoundException());
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
};

function compose_authorization (authorization = {}) {
  const {user_id, session_id} = authorization;
  return {user_id, session_id};
}
