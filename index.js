const express = require('express');
const app = express();
const json = require('body-parser').json;

app.disable('x-powered-by');
app.use(json());

app.get('/ok', (req, res) => res.sendStatus(200));

app.use('/posts', require('./src/posts/router'));

app.listen(1337, () => console.info('http://localhost:1337'));
