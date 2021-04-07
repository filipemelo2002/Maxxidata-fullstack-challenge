import { getRepository } from 'typeorm';
import Professional from '../../models/Professional';
export default class CreateProfessional {
  async execute({
    nome,
    telefone,
    email,
    tipoDeProfissional,
    situacao,
  }: ProfessionalCreateBody): Promise<Professional> {
    const data = {
      nome,
      telefone,
      email,
      tipoDeProfissional,
      situacao,
    };
    const professionalRepository = getRepository(Professional);
    const professional = professionalRepository.create(data);
    await professionalRepository.save(professional);
    return professional;
  }
}
