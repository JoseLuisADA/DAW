import express from 'express';
import cors from 'cors';

import router from '../routes/index.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../openapi/openapi.json' assert { type: "json" };

export default function(server){
    /* Config */
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true}));
    /** */
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    /* Routes */
    server.use(router);
    /* Error handler */ 
    server.use(errorMiddleware);
}
