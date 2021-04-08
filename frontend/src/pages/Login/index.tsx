import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { saveToken } from '../../services/token';

/**
 * https://dribbble.com/shots/11369570--Log-in-Exploration
 */

import { Container } from '../../styles/login';
import LoginComponent from './SignIn';
import SignUpComponent from './SignUp';
const Login: React.FC = () => {
  const { token } = useSelector((state: State) => state.session);
  const history = useHistory();

  useEffect(() => {
    if (token.length > 0) {
      saveToken(token);
      history.push('/');
    }
  }, [token]);

  return (
    <Container>
      <LoginComponent />
      <SignUpComponent />
    </Container>
  );
};

export default Login;
