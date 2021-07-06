import { Router } from 'express';

import render from '../middlewares/render';

export default Router().get('*', render);
