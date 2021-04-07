import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../../errors/AppError';
import Admin from '../../models/Admin';

interface IUpdateAdmin {
  id: string;
  nome: string;
  email: string;
  senha?: string;
}
class UpdateAdmin {
  public async execute({
    id,
    nome,
    email,
    senha,
  }: AdminUpdateBody): Promise<void> {
    const adminRepository = getRepository(Admin);

    const admin = await adminRepository.findOne({
      id,
    });
    if (!admin) {
      throw new AppError('Could not find such Admin', 404);
    }

    const data: IUpdateAdmin = {
      id,
      nome,
      email,
    };

    if (senha) {
      const newPassword = await hash(senha, 8);
      data.senha = newPassword;
    }

    await adminRepository.save(data);
  }
}
export default UpdateAdmin;
