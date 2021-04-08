import Api from '.';

export const login = async ({ email, senha }: ILogin): Promise<ILoginRes> => {
  const response = await Api.post('/login', { email, senha });
  return response.data;
};
