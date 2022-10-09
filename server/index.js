/* eslint-disable no-console */
import express from 'express';
import compression from 'compression';
import path from 'path';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';

const port = 9000;
const app = express();
const server = http.Server(app);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || port);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);

server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
