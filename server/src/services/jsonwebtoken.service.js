import vars from '../config/vars.js';
import jwt from 'jsonwebtoken';

export default () => {
  const secret = vars.jwtSecret;

  return {
    sign: (payload = {}) => {
      return jwt.sign(payload, secret, {
        expiresIn: '30 days',
        algorithm: 'HS256'
      });
    },
    decode: (token) => {
      return jwt.verify(token, secret);
    }
  };
};
