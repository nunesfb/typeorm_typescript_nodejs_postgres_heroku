import { Router } from 'express';
import candidateTypeRouter from './candidate.routes';

const routes = Router();
 
routes.use('/', candidateTypeRouter);

export default routes;
