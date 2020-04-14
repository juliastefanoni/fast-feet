import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import AuthMiddleware from './app/middlewares/authSession';

const routes = new Router();

routes.post('/users', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/recipients', RecipientController.store);


export default routes;
