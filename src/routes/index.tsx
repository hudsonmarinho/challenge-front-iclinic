import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Master from '../pages/Master';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/master" component={Master} />
  </Switch>
);

export default Routes;
