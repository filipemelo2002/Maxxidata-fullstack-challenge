import { Router } from 'express';
import CreateSession from '../services/Session/create';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, senha } = request.body;
  const createSession = new CreateSession();
  const auth = await createSession.execute({ email, senha });
  return response.json(auth);
});

export default sessionRouter;
