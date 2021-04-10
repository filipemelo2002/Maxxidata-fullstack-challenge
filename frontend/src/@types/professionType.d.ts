interface IProfessionTypeResponse {
  id: string;
  descricao: string;
  situacao: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IProfessionalTypeCreateBody {
  descricao: string;
  situacao: boolean;
}
