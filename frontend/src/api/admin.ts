import Api from '.';

export const create = async ({
  nome,
  email,
  senha,
}: IAdminCreateBody): Promise<IAdminResponse> => {
  const response = await Api.post('/admin', { nome, email, senha });
  return response.data;
};

export const get = async (id: string): Promise<IAdminResponse> => {
  const response = await Api.get(`/admin/${id}`);
  return response.data;
};

export const update = async ({
  id,
  nome,
  email,
  senha,
}: IAdminUpdateBody): Promise<void> => {
  await Api.put(`/admin/${id}`, { nome, email, senha });
};

export const remove = async (id: string): Promise<void> => {
  await Api.delete(`/admin/${id}`);
};
