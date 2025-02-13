import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance Reporting (Optional)
// If needed, pass a function to log results, e.g., `reportWebVitals(console.log)`
// Learn more: https://bit.ly/CRA-vitals
import reportWebVitals from './reportWebVitals';
reportWebVitals();
