import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Check from '../pages/Check';
import Toppings from '../pages/Toppings';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/toppings" component={Toppings} />
    <Route path="/check" component={Check} />
  </Switch>
);

export default Routes;
