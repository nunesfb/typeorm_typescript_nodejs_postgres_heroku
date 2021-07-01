import { getCustomRepository } from 'typeorm';

import Candidate from '../../models/Candidate';
import CandidateRepository from '../../repositories/CandidateRepository';

interface Request {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  city: string;
  profile_photo: string;
}

class CreateCandidateService {
  public async execute({
    name,
    email,
    phone,
    cpf,
    city,
    profile_photo
  }: Request): Promise<Candidate> {

    const candidateRepository = getCustomRepository(CandidateRepository);

    const candidate = candidateRepository.create({
      name,
      email,
      phone,
      cpf,
      city,
      profile_photo
    });

    await candidateRepository.save(candidate);

    return candidate;
  }
}

export default CreateCandidateService;
