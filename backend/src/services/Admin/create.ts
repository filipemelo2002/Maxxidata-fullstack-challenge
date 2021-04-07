import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../../errors/AppError';
import Admin from '../../models/Admin';
export default class CreateAdmin {
  async execute({ nome, email, senha }: AdminCreateBody): Promise<Admin> {
    const adminRepository = getRepository(Admin);
    const checkAdminExists = await adminRepository.findOne({
      where: { email },
    });
    if (checkAdminExists) {
      throw new AppError('Admin Email already taken.', 401);
    }
    const hashedPassword = await hash(senha, 8);
    const admin = adminRepository.create({
      nome,
      email,
      senha: hashedPassword,
    });
    await adminRepository.save(admin);
    return admin;
  }
}
