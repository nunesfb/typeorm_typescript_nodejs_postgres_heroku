import { EntityRepository, Repository } from 'typeorm';
import Candidate from '../models/Candidate';

@EntityRepository(Candidate)
class CandidateRepository extends Repository<Candidate> {

  public async findByEmail(email: string): Promise<Candidate | null> {
    const findEmail = await this.findOne({

      where: { email },
    });

    return findEmail || null;
  }

  public async findById(id_candidate: string): Promise<Candidate | null> {
    const findId = await this.findOne({
      where: { id_candidate },
    });

    return findId || null;
  }
}

export default CandidateRepository;
