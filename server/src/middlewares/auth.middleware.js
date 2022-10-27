/* eslint-disable padded-blocks */
import jsonwebtoken from '../services/jsonwebtoken.service.js';
import sessionsModel from '../modules/sessions/sessions.model.js';
import {
  NoTokenProvidedException,
  SessionNotFoundException,
  UserNotFoundException
} from '../modules/shared/exceptions';
import {parseApiErrors} from '../utils/errors.js';

const jwt = jsonwebtoken();

const auth_payload_key = 'auth_payload';

export default function authMiddleware () {
  
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */

  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new NoTokenProvidedException();
      }

      const token_payload = jwt.decode(token.split(' ')[1]);
      const authorization = compose_authorization(token_payload);
      req[auth_payload_key] = authorization;

      const [session] = await sessionsModel.find({
        _id: authorization.session_id,
        user: authorization.user_id
      }, {populate: 'user'});

      if (!session) {
        throw new SessionNotFoundException();
      }

      if (!session.user) {
        throw new UserNotFoundException();
      }

      return next();
    } catch (error) {
      const errors = parseApiErrors(error);
      return res.status(401).json({response: null, errors});
    }
  };
}

function compose_authorization (authorization = {}) {
  const {user_id, session_id} = authorization;
  return {user_id, session_id};
}
