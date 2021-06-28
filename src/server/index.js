const express = require('express')

const render = require('./middlewares/render')

const app = express()

app.get('/*', render)