import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const NotFoundPage = () => (
  <div>
    <Navbar />
    <div className="container--centered">
      <div className="text--ms">Page not found</div>

      <Link to="/" className="link link--green">
        Go home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
