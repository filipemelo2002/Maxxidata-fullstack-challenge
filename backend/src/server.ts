import express from 'express';

const app = express();
app.use(express.json());
app.use('/', (request, response) => {
  return response.json({ message: 'API is running' });
});

app.listen(3333, () => console.log('SERVER STARTED ON 3333'));
