import express from 'express';
import cors from 'cors';
import routes from '../modules/routes';
import authMiddleware from '../middlewares/auth.middleware.js';
import errorsMiddleware from '../middlewares/errors.middleware.js';
import localeMiddleware from '../middlewares/locale.middleware.js';
import routes_setup from './routes_setup.js';

const app = express();

// Parse application/JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable CORS
app.use(cors());

// Mount [/api] routes
routes_setup(routes, app, {
  path_prefix: '/api',
  after_middlewares: [],
  // Mount locale middleware to handle locale changes
  before_middlewares: [localeMiddleware()],
  // Add auth middleware
  auth_middlewares: [authMiddleware(routes)]
});

// Mount errors middleware
app.use(errorsMiddleware());

export default app;
