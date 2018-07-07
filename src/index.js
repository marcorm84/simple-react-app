import './bootstrap';
import React from 'react';
import { render } from 'react-snapshot'
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const rootEl = document.getElementById('root');
render(
  <Router>
    <AppRoutes />
  </Router>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    render(<NextApp />, rootEl);
  });
}

registerServiceWorker();
