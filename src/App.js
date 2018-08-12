import React, { Component } from 'react';
import AppRouter from './AppRouter';

import './styles/styles.scss';

class App extends Component {
  render() {
    const test = process.env;
    console.log('test', test);
    return <AppRouter />;
  }
}

export default App;
