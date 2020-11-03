import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import gitHub from './gitHub';
import App from './components/app/App';

render(
  <Provider gitHub={gitHub}>
    <App />
  </Provider>,
  document.getElementById('root')
);
