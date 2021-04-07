import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import authConfig from '../../config/auth';
import { sign } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import Admin from '../../models/Admin';

interface CreateSessionBody {
  email: string;
  senha: string;
}

interface CreateSessionSuccess {
  admin: Admin;
  token: string;
}

export default class CreateSession {
  async execute({
    email,
    senha,
  }: CreateSessionBody): Promise<CreateSessionSuccess> {
    const professionalRepository = getRepository(Admin);
    const admin = await professionalRepository.findOne({ where: { email } });

    if (!admin) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatches = await compare(senha, admin.senha);

    if (!passwordMatches) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: admin.id,
      expiresIn,
    });
    delete admin.senha;
    return { admin, token };
  }
}
