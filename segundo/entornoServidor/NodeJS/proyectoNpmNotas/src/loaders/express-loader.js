import express from 'express';
import cors from 'cors';

import router from '../routes/index.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';

export default function(server){
    /* Config */
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true}));
    /* Routes */
    server.use(router);
    /* Error handler */ 
    server.use(errorMiddleware);
}
