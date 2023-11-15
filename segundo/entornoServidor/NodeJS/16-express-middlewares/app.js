/* eslint-disable linebreak-style */
import express from 'express';
import morgan from 'morgan';
import logger from './middlewares/logger.js';

const app = express();

app.use(morgan('combined'));

export default app;
