interface IAdminCreateBody {
  nome: string;
  email: string;
  senha: string;
}
interface IAdminUpdateBody {
  nome?: string;
  email?: string;
  senha?: string;
  id: string;
}
interface IAdminResponse {
  nome: string;
  email: string;
  id: string;
}
