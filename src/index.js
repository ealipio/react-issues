import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/App';
import Layout from './components/Layout';
import getStore from './store/getStore';

import './index.css';

const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
