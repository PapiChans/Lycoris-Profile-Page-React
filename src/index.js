import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

// Importing the default BG color
import DefaultBG from './master/default_bg';
// Color Pallete
import { ThemeProvider } from './master/theme';

// Components
import Navbar from './components/navbar';
import Home from './components/home';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(

  <React.StrictMode>
    <DefaultBG>
      <ThemeProvider>
        <Navbar />
        <Home />
      </ThemeProvider>
    </DefaultBG>
  </React.StrictMode>
);