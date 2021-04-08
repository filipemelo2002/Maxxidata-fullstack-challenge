import React, { FormEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { saveToken } from '../../services/token';
import Logo from '../../assets/logo-main.png';
import LogoLight from '../../assets/logo.png';
import Loader from 'react-loader-spinner';
import * as Creators from '../../redux/action/session';
/**
 * https://dribbble.com/shots/11369570--Log-in-Exploration
 */

import { Container, SignIn } from '../../styles/login';
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerSenha, setRegisterSenha] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  const { loading, error, token } = useSelector(
    (state: State) => state.session,
  );
  const history = useHistory();
  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginLoading(true);
    if (!loading) {
      if (!email || !senha) {
        toast.warn('Por favor, preencha todos os campos.');
        return false;
      }
      dispatch(Creators.login({ email, senha }));
    }
    setLoginLoading(false);
    return true;
  };

  const handleSubmitSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (token.length > 0) {
      saveToken(token);
      history.push('/');
    }
  }, [token]);

  return (
    <Container>
      <SignIn>
        <img src={Logo} />
        <div>
          <h1>Entre.</h1>
          <p>Faça Login com os dados informados no cadastro.</p>
        </div>
        <form onSubmit={handleSubmitSignIn}>
          <label htmlFor="email">Seu E-Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          {loading ? (
            <Loader type="ThreeDots" color="#0c0c4b" height={30} width={30} />
          ) : (
            <button type="submit">Entrar</button>
          )}
        </form>
      </SignIn>
      <SignIn signup>
        <img src={LogoLight} />
        <div>
          <h1>Cadastre-se.</h1>
          <p>Faça seu cadastro informando os seus dados abaixo.</p>
        </div>
        <form>
          <label htmlFor="name">Seu Nome</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Seu E-Mail</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />

          {loading ? (
            <Loader type="ThreeDots" color="#fff" height={30} width={30} />
          ) : (
            <button>Cadastrar</button>
          )}
        </form>
      </SignIn>
    </Container>
  );
};

export default Login;
