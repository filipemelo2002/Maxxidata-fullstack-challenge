import { Router } from 'express';
import professionalTypeRouter from './professionalType.routes';
const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'API is running' });
});

routes.use('/professionalType', professionalTypeRouter);

export default routes;
