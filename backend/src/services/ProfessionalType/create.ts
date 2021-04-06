import { getRepository } from 'typeorm';

import ProfessionalType from '../../models/ProfesionalType';

class CreateProfessionalType {
  public async execute({
    descricao,
    situacao,
  }: ProfessionalTypeCreateBody): Promise<ProfessionalType> {
    const professionalTypeRepository = getRepository(ProfessionalType);

    const professionalType = professionalTypeRepository.create({
      descricao,
      situacao,
    });

    await professionalTypeRepository.save(professionalType);
    return professionalType;
  }
}
export default CreateProfessionalType;
