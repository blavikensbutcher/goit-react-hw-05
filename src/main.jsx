import React from 'react';
import ReactDOM from 'react-dom/client';
import './js/api.js';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
