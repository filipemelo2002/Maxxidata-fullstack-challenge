import { Router } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import ProfessionalType from '../models/ProfesionalType';
import ProfessionalServiceCreate from '../services/ProfessionalType/create';
import ProfessionalServiceRemove from '../services/ProfessionalType/remove';
import ProfessionalServiceUpdate from '../services/ProfessionalType/update';

const professionalTypeRouter = Router();

professionalTypeRouter.post('/', async (request, response) => {
  const { descricao, situacao } = request.body;
  const createProfessionalType = new ProfessionalServiceCreate();
  const professionalType = await createProfessionalType.execute({
    descricao,
    situacao,
  });

  return response.json(professionalType);
});

professionalTypeRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const professionalTypeRepository = getRepository(ProfessionalType);
  const professionalRepository = await professionalTypeRepository.findOne({
    id,
  });
  if (!professionalRepository) {
    throw new AppError('Could not find such Professional Type', 404);
  }
  return response.json(professionalRepository);
});

professionalTypeRouter.get('/', async (request, response) => {
  const professionalTypeRepository = getRepository(ProfessionalType);
  const professionalRepository = await professionalTypeRepository.find();
  return response.json(professionalRepository);
});

professionalTypeRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { descricao, situacao } = request.body;
  const professionalServiceUpdate = new ProfessionalServiceUpdate();
  await professionalServiceUpdate.execute({
    id,
    descricao,
    situacao,
  });
  return response.status(201).send();
});

professionalTypeRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const removeProfessionalType = new ProfessionalServiceRemove();
  await removeProfessionalType.execute({ id });
  return response.status(201).send();
});

export default professionalTypeRouter;
