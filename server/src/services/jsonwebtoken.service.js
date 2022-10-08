import vars from '../config/vars.js';
import jwt from 'jsonwebtoken';

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
      return jwt.verify(token, secret);
    }
  };
};
