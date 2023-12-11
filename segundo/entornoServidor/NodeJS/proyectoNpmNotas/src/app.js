import express from 'express';
import loaders from './loaders/express-loader.js';

const server = express();

loaders.init(server);

export default server;
