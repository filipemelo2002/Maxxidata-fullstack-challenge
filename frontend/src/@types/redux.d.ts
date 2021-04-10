interface SessionInterface extends ILoginRes {
  loading: boolean;
  error: boolean;
}
interface AdminInterface {
  data: IAdminResponse[];
  loading: boolean;
  error: boolean;
}

interface ProfessionalTypeInterface {
  data: IProfessionTypeResponse[];
  loading: boolean;
  error: boolean;
}

interface ProfessionalInterface {
  data: IProfessionalResponse[];
  loading: boolean;
  error: boolean;
}
interface State {
  session: SessionInterface;
  admin: AdminInterface;
  professionalType: ProfessionalTypeInterface;
  professional: ProfessionalInterface;
}
