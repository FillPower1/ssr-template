import { Router } from 'express';

import { getDefaultMiddleware } from '../middlewares/render/hot';
import render from '../middlewares/render';

const middlewares = [...getDefaultMiddleware()];

export default Router().get('/*', middlewares, render);
