import { Router } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import CreateProfessional from '../services/Professional/create';
const professionalRouter = Router();

professionalRouter.post('/', async (request, response) => {
  const {
    nome,
    telefone,
    email,
    tipoDeProfissional,
    situacao,
  }: ProfessionalCreateBody = request.body;
  const createProfessionalService = new CreateProfessional();
  const professional = await createProfessionalService.execute({
    nome,
    telefone,
    email,
    tipoDeProfissional,
    situacao,
  });
  return response.json(professional);
});

export default professionalRouter;
