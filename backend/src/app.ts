import express from 'express';

const app = express();
app.use(express.json());
app.use('/', (request, response) => {
  return response.json({ message: 'API is running' });
});

export default app;
