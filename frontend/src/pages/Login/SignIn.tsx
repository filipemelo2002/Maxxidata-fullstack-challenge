import React, { FormEvent, useState } from 'react';

// import { Container } from './styles';
import { SignIn } from '../../styles/login';
import Logo from '../../assets/logo-main.png';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../redux/action/session';
import { toast } from 'react-toastify';

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: State) => state.session);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      if (!email || !senha) {
        toast.warn('Por favor, preencha todos os campos.');
        return false;
      }
      dispatch(Creators.login({ email, senha }));
    }
    return true;
  };

  return (
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
  );
};

export default LoginComponent;
