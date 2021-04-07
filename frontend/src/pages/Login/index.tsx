import React from 'react';

// import { Container } from './styles';
import Logo from '../../assets/logo-main.png';
import LogoLight from '../../assets/logo.png';
/**
 * https://dribbble.com/shots/11369570--Log-in-Exploration
 */

import { Container, SignIn } from '../../styles/login';
const Login: React.FC = () => {
  return (
    <Container>
      <SignIn>
        <img src={Logo} />
        <div>
          <h1>Entre.</h1>
          <p>Faça Login com os dados informados no cadastro.</p>
        </div>
        <form>
          <label htmlFor="email">Seu E-Mail</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />

          <button>Entrar</button>
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
          <button>Cadastrar</button>
        </form>
      </SignIn>
    </Container>
  );
};

export default Login;
