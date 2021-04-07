import { Router } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import CreateAdmin from '../services/Admin/create';
import RemoveAdmin from '../services/Admin/remove';
import UpdateAdmin from '../services/Admin/update';

import Admin from '../models/Admin';
const adminRouter = Router();

adminRouter.post('/', async (request, response) => {
  const { nome, email, senha } = request.body;
  const createAdminService = new CreateAdmin();
  const admin = await createAdminService.execute({ nome, email, senha });
  delete admin.senha;
  return response.json(admin);
});

adminRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const adminRepository = getRepository(Admin);
  const admin = await adminRepository.findOne({ where: { id } });
  if (!admin) {
    throw new AppError('Not found such Admin', 404);
  }
  delete admin.senha;
  return response.json(admin);
});

adminRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { nome, email, senha } = request.body;
  const updateAdminService = new UpdateAdmin();
  await updateAdminService.execute({ id, nome, email, senha });
  return response.status(201).send();
});

adminRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const removeAdminService = new RemoveAdmin();
  await removeAdminService.execute({ id });
  return response.status(201).send();
});
export default adminRouter;
