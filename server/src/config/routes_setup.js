/* eslint-disable new-cap */
import express from 'express';
import schemasMiddleware from '../middlewares/schemas.middleware';
import request from '../modules/core/request.js';

export default function routes_setup (routes = [], config = {}) {
  const router = express.Router();

  const {
    before_middlewares = [],
    after_middlewares = [],
    auth_middlewares = [],
    path_prefix = ''
  } = config;
  
  return (_app = {}) => {
    const app = path_prefix 
      ? router
      : _app;
    
    routes.forEach((route) => {
      const {
        method,
        path,
        handler,
        schema
      } = route;

      if (app[method] && handler) {
        const handlers = [
          ...before_middlewares
        ];

        if (route.private) {
          handlers.push(...auth_middlewares);
        }

        if (schema) {
          handlers.push(schemasMiddleware(schema));
        }

        handlers.push(...after_middlewares);
        handlers.push(request(handler));

        app[method](path, handlers);
      }
    });

    if (path_prefix) {
      _app.use(path_prefix, app);
    }
  };
}
