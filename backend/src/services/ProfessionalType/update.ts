import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';
import ProfessionalType from '../../models/ProfesionalType';

class UpdateProfessionalType {
  public async execute({
    id,
    descricao,
    situacao,
  }: ProfessionalTypeUpdateBody): Promise<void> {
    const professionalTypeRepository = getRepository(ProfessionalType);

    const professionalType = await professionalTypeRepository.findOne({
      id,
    });
    if (!professionalType) {
      throw new AppError('Could not find such professional type', 404);
    }

    await professionalTypeRepository.save({ id, situacao, descricao });
  }
}
export default UpdateProfessionalType;
