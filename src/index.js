import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './components/Protected/AuthContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
