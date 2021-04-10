import React from 'react';

import { Container, Content } from '../../styles/home';
import Menu from '../../components/Menu';
import { Route, Switch } from 'react-router';

import Professional from '../Professional';
import ProfessionalType from '../ProfessionalType';
import List from '../List';
const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Switch>
          <Route component={List} path="/" exact />
          <Route component={Professional} path="/professional" exact />
          <Route component={ProfessionalType} path="/professional-type" exact />
        </Switch>
      </Content>
    </Container>
  );
};

export default Home;
