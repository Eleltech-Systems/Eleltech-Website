import express from 'express';
import { signin, signout, signup } from '../controller/auth.controller.js';

const routes = express.Router();

routes.post('/signup', signup);
routes.post('/signin', signin);
routes.post('/signout', signout);

export default routes