import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/details:id" component={DetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;