import express from 'express';
import { getBaseRoute, getGamesLive, getNews } from '../controllers';
import middleware from '../middleware';

const routes = express.Router();

routes.get('/', middleware, getBaseRoute)
routes.get('/aregameslive', middleware, getGamesLive)
routes.get('/news', middleware, getNews)

export default routes