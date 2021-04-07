interface ProfessionalCreateBody {
  nome: string;
  telefone?: string;
  email?: string;
  tipoDeProfissional: string;
  situacao: boolean;
}

interface ProfessionalUpdateBody extends ProfessionalCreateBody {
  id: string;
}
interface ProfessionalRemoveBody {
  id: string;
}
