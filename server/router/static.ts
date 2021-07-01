import { resolve } from 'path';

import { Router, static as staticRoute } from 'express';
import compression from 'compression';
import cwd from 'cwd';

const root = cwd();

export default Router()
    .use(compression())
    .use('/', staticRoute(resolve(root, 'dist')))
    .use('/static', staticRoute(resolve(root, 'dist', 'static')));
