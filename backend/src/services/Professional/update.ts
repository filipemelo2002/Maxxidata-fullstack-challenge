import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';
import Professional from '../../models/Professional';

class UpdateProfessional {
  public async execute({
    id,
    nome,
    telefone,
    email,
    tipoDeProfissional,
    situacao,
  }: ProfessionalUpdateBody): Promise<void> {
    const professionalRepository = getRepository(Professional);

    const professional = await professionalRepository.findOne({
      id,
    });
    if (!professional) {
      throw new AppError('Could not find such professional', 404);
    }

    await professionalRepository.save({
      id,
      situacao,
      nome,
      telefone,
      email,
      tipoDeProfissional,
    });
  }
}
export default UpdateProfessional;
