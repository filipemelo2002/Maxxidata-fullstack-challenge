import React, { FormEvent, useState } from 'react';

// import { Container } from './styles';
import LogoLight from '../../assets/logo.png';
import { SignIn } from '../../styles/login';
import * as Creators from '../../redux/action/admin';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';

const SignUpComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: State) => state.admin);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmitSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      if (!email || !senha || !nome) {
        toast.warn('Por favor, preencha todos os campos.');
        return false;
      }
      dispatch(Creators.create({ email, senha, nome }));
    }
    return true;
  };

  return (
    <SignIn signup>
      <img src={LogoLight} />
      <div>
        <h1>Cadastre-se.</h1>
        <p>Faça seu cadastro informando os seus dados abaixo.</p>
      </div>
      <form onSubmit={handleSubmitSignUp}>
        <label htmlFor="name">Seu Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

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
          <Loader type="ThreeDots" color="#fff" height={30} width={30} />
        ) : (
          <button type="submit">Cadastrar</button>
        )}
      </form>
    </SignIn>
  );
};

export default SignUpComponent;
