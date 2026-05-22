import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root =
 ReactDOM.createRoot(document.getElementById('root'));
root.render( // This tells React: “Render (display) the <App /> component inside #root”
  <React.StrictMode>
    <App />
  </React.StrictMode>
);