import React from 'react';
import ReactDOM from 'react-dom/client';
import BrowserRouter from 'react-router-dom/BrowserRouter'

import App from './Containers/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render
(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    (//)<React.StrictMode>
      <App />
    (//)</React.StrictMode>
  </BrowserRouter>
);