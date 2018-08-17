import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import SearchResultsPage from './components/SearchResultsPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/results" component={SearchResultsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
