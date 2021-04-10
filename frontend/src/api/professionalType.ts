import Api from '.';

export const list = async (): Promise<IProfessionTypeResponse[]> => {
  const response = await Api.get('/professionalType');
  return response.data;
};

export const create = async ({
  descricao,
  situacao,
}: IProfessionalTypeCreateBody): Promise<IProfessionTypeResponse> => {
  const response = await Api.post('/professionalType', { descricao, situacao });
  return response.data;
};
