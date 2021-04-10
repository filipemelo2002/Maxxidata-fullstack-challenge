import Api from '.';

export const list = async (): Promise<IProfessionalResponse[]> => {
  const response = await Api.get('/professional');
  return response.data;
};

export const create = async ({
  nome,
  tipoDeProfissional,
  situacao,
  email,
  telefone,
}: IProfessionalCreate): Promise<IProfessionalResponse> => {
  const response = await Api.post('/professional', {
    nome,
    tipoDeProfissional,
    situacao,
    email,
    telefone,
  });

  return response.data;
};
