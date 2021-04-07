import { Router } from 'express';
import professionalTypeRouter from './professionalType.routes';
import profesionalRouter from './professional.routes';
const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'API is running' });
});

routes.use('/professionalType', professionalTypeRouter);
routes.use('/professional', profesionalRouter);
export default routes;
