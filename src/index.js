import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/main'

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>
);