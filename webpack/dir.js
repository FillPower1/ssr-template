const path = require('path');
const cwd = require('cwd')

const ROOT = cwd()

const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');
const SERVER_DIR = path.join(SRC_DIR, 'server',)
const CLIENT_DIR = path.join(SRC_DIR, 'client',)

module.exports = {
    ROOT,
    SRC_DIR,
    DIST_DIR,
    SERVER_DIR,
    CLIENT_DIR
}
