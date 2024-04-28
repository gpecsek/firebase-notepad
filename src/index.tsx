import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );}

