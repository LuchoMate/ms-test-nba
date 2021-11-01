import express from 'express';
import { getBaseRoute } from '../controllers';
import middleware from '../middleware';

const routes = express.Router();

routes.get('/', middleware, getBaseRoute)

export default routes