import { Router } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Professional from '../models/Professional';
import CreateProfessional from '../services/Professional/create';
import UpdateProfessional from '../services/Professional/update';
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

professionalRouter.get('/', async (request, response) => {
  const professionalRepository = getRepository(Professional);
  const professionals = await professionalRepository.find();
  return response.json(professionals);
});

professionalRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { nome, telefone, email, tipoDeProfissional, situacao } = request.body;

  const updateProfessionalService = new UpdateProfessional();
  await updateProfessionalService.execute({
    id,
    nome,
    telefone,
    email,
    tipoDeProfissional,
    situacao,
  });
  return response.status(201).send();
});

export default professionalRouter;
