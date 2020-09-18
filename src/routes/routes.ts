import express from 'express';
const app = express();

app.use( require('./token') );

// module.exports = app;

// import {Router} from 'express';
// const router: Router = Router();


export default app;