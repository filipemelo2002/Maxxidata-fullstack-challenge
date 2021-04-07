import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Professional from '../../models/Professional';

class RemoveProfessional {
  public async execute({ id }: ProfessionalRemoveBody): Promise<void> {
    const professionalRepository = getRepository(Professional);
    const checkIfExits = await professionalRepository.findOne({ id });
    if (!checkIfExits) {
      throw new AppError('Could not find such Professional', 404);
    }
    await professionalRepository.delete({
      id,
    });
  }
}
export default RemoveProfessional;
