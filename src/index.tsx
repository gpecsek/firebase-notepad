import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App';
import { AppRoutes } from './routing/AppRoutes';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );}

