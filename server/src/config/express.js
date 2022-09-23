import express from 'express';
import cors from 'cors';
import routes from '../modules/routes';
import authMiddleware from '../middlewares/auth.middleware.js';
import errorsMiddleware from '../middlewares/errors.middleware.js';
import localeMiddleware from '../middlewares/locale.middleware.js';
import routes_setup from './routes_setup.js';

const app = express();

// Parse application/JSON
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

// Enable CORS
app.use(cors());

// Mount [/api] routes
routes_setup(routes, {
  path_prefix: '/api',
  auth_middlewares: [authMiddleware(routes)],
  before_middlewares: [],
  after_middlewares: [localeMiddleware()]
})(app);

// Mount errors middleware
app.use(errorsMiddleware());

export default app;
