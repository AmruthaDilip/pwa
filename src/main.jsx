import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

      if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
              }, function(err) {
                  console.error('ServiceWorker registration failed: ', err);
              });
          });
      }
