interface AdminCreateBody {
  nome: string;
  email: string;
  senha: string;
}

interface AdminUpdateBody extends AdminCreateBody {
  id: string;
}
interface AdminRemoveBody {
  id: string;
}
