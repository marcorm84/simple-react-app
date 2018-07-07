import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Home from 'components/Home';
import Page404 from 'components/Page404';
import About from 'components/About';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;