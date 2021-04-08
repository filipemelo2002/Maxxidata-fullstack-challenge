interface SessionInterface extends ILoginRes {
  loading: boolean;
  error: boolean;
}
interface AdminInterface {
  data: IAdminResponse[];
  loading: boolean;
  error: boolean;
}

interface State {
  session: SessionInterface;
  admin: AdminInterface;
}
