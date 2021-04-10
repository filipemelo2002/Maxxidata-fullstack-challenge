interface IProfessionalResponse {
  nome: string;
  tipoDeProfissional: string;
  situacao: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface IProfessionalCreate {
  nome: string;
  tipoDeProfissional: string;
  situacao: boolean;
  telefone?: string;
  email?: string;
}
