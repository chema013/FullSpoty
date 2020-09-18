require('./config/config');

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import routes from './routes/routes';

const app: Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// parse application/json
app.use(bodyParser.json());

//hablitar el public
app.use(express.static(path.resolve(__dirname, '../public')));

// settings
app.use(routes);

export default app;