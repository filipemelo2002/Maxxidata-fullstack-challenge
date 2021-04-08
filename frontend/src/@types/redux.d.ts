interface SessionInterface extends ILoginRes {
  loading: boolean;
  error: boolean;
}

interface State {
  session: SessionInterface;
}
