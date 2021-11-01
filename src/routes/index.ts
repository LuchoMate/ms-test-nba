import express from 'express';
import { getBaseRoute, getGamesLive } from '../controllers';
import middleware from '../middleware';

const routes = express.Router();

routes.get('/', middleware, getBaseRoute)
routes.get('/aregameslive', middleware, getGamesLive)

export default routes