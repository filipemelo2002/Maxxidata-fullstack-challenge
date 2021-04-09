import React from 'react';

import { Container, Content } from '../../styles/home';
import Menu from '../../components/Menu';
import { Route, Switch } from 'react-router';

import Professional from '../Professional';
const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Switch>
          <Route component={Professional} path="/professional" exact />
        </Switch>
      </Content>
    </Container>
  );
};

export default Home;
