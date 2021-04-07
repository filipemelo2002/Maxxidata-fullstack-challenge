import { getRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Admin from '../../models/Admin';

class RemoveAdmin {
  public async execute({ id }: AdminRemoveBody): Promise<void> {
    const adminRepository = getRepository(Admin);
    const checkIfExits = await adminRepository.findOne({ id });
    if (!checkIfExits) {
      throw new AppError('Could not find such Admin', 404);
    }
    await adminRepository.delete({
      id,
    });
  }
}
export default RemoveAdmin;
