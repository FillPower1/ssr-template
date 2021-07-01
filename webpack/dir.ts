import path from 'path';

import cwd from 'cwd';

const ROOT = cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const SERVER_DIR = path.join(ROOT, 'server');
const CLIENT_DIR = path.join(ROOT, 'client');

export { ROOT, DIST_DIR, SERVER_DIR, CLIENT_DIR };
