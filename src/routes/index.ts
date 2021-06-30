import { Router } from 'express';
import candidateTypeRouter from './candidate.routes';

const routes = Router();
 
routes.use('/candidate', candidateTypeRouter);

export default routes;
