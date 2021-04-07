import React, { ComponentType } from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { Redirect, Switch, Route, RouteProps } from 'react-router-dom';
// import { Container } from './styles';

interface PrivateRouteProps extends RouteProps {
  component: ComponentType;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('@Token') ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
