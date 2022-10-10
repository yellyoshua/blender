import vars from '../config/vars.js';
import jwt from 'jsonwebtoken';
import {InvalidTokenException} from '../modules/shared/exceptions';

export default () => {
  const secret = vars.jwtSecret;

  return {

    /**
     * 
     * @param {Record<string, any>} payload
     * @returns {string}
     */

    sign: (payload = {}) => {
      return jwt.sign(payload, secret, {
        expiresIn: '30 days',
        algorithm: 'HS256'
      });
    },

    /**
     * 
     * @param {string} token
     * @returns {Record<string, any>}
     */
  
    decode: (token) => {
      try {
        return jwt.verify(token, secret);
      } catch (error) {
        throw new InvalidTokenException();
      }
    }
  };
};
