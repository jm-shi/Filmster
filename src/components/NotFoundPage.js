import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div
    style={{
      background: 'black',
      left: '50%',
      padding: '50px',
      position: 'fixed',
      top: '50%',
      textAlign: 'center',
      transform: 'translate(-50%, -50%)'
    }}
  >
    <p>404</p>
    <p>Page not found</p>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
