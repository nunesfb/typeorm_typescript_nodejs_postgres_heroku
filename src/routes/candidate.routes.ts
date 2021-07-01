import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CandidateRepository from '../app/repositories/CandidateRepository';
import CreateCandidateService from '../app/services/candidate/CreateCandidateService';

const candidateRouter = Router();

candidateRouter.get('/', async (request, response) => {

  const candidateRepository = getCustomRepository(CandidateRepository);
  const candidate = await candidateRepository.find();

  return response.json(candidate);
});

candidateRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      phone,
      cpf,
      city,
      profile_photo,
    } = request.body;

    const CreateCandidate = new CreateCandidateService();

    const candidate = await CreateCandidate.execute({
      name,
      email,
      phone,
      cpf,
      city,
      profile_photo
    });

    return response.json(candidate);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default candidateRouter;
