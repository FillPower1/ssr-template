import express from 'express';

import appRoutes from './router/app';
import staticRoutes from './router/static';
import hotMiddleware from './middlewares/hot';

const app = express();

const { PORT = 9000 } = process.env;

app
    .disable('x-powered-by')
    .use(hotMiddleware)
    .use(appRoutes)
    .use(staticRoutes);

app.listen(PORT, () => {
    console.log(`Running on: \n\t * http://localhost:${PORT} \n`);
});
