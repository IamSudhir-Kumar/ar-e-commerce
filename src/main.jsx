// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
