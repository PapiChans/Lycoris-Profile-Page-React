import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

// Importing the default
import DefaultBG from './master/default_bg';

// Components
import Navbar from './components/navbar';
import Home from './components/home';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(

  <React.StrictMode>
    <DefaultBG>
      <Navbar />
      <Home />
    </DefaultBG>
  </React.StrictMode>
);