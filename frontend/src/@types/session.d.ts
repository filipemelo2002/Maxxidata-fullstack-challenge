interface ILogin {
  email: string;
  senha: string;
}

interface IAdmin {
  id: string;
  nome: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
interface ILoginRes {
  admin: IAdmin;
  token: string;
}
