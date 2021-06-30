import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CandidateRepository from '../app/repositories/CandidateRepository';

const candidateRouter = Router();

candidateRouter.get('/', async (request, response) => {

  const candidateRepository = getCustomRepository(CandidateRepository);
  const candidate = await candidateRepository.find();

  return response.json(candidate);
});

export default candidateRouter;
