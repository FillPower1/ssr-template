import express from 'express';

import appRoutes from './router/app';
import staticRoutes from './router/static';

const app = express();

const { PORT = 9000 } = process.env;

app.use(staticRoutes).use(appRoutes);

app.listen(PORT, () => {
    console.log(`Running on: \n\t * http://localhost:${PORT} \n`);
});
