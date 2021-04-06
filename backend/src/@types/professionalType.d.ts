interface ProfessionalTypeCreateBody {
  descricao: string;
  situacao: boolean;
}

interface ProfessionalTypeRemoveBody {
  id: string;
}

interface ProfessionalTypeUpdateBody {
  descricao?: string;
  situacao?: boolean;
  id: string;
}
