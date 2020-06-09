import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Layout from './components/Layout';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
