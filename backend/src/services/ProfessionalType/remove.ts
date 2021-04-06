import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import ProfessionalType from '../../models/ProfesionalType';

class RemoveProfessionalType {
  public async execute({ id }: ProfessionalTypeRemoveBody): Promise<void> {
    const professionalTypeRepository = getRepository(ProfessionalType);
    const checkIfExits = await professionalTypeRepository.findOne({ id });
    if (!checkIfExits) {
      throw new AppError('Could not find such professional type', 404);
    }
    await professionalTypeRepository.delete({
      id,
    });
  }
}
export default RemoveProfessionalType;
