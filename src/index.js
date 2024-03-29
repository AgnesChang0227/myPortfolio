import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {BrowserRouter} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";

import {HashRouter} from "react-router-dom";//try for deploy

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>
);

