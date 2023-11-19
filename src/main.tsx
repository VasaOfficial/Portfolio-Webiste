import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './styles/main.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
