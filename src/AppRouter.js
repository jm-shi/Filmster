import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DetailsPage from './components/DetailsPage';
import DiscoverPage from './components/DiscoverPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import SearchResultsPage from './components/SearchResultsPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/discover/:type?" component={DiscoverPage} />
      <Route path="/results" component={SearchResultsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
