import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

// Importing the default BG color
import DefaultBG from './master/default_bg';
// Color Pallete
import { ThemeProvider } from './master/theme';

// Components
import NavbarWrapper from './components/navwrapper';
import Home from './components/home';
import SwitchCharacter from './master/switchcharacter';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(

  <React.StrictMode>
    <DefaultBG>
      <ThemeProvider>
        <NavbarWrapper />
        <SwitchCharacter/>
        <Home />
      </ThemeProvider>
    </DefaultBG>
  </React.StrictMode>
);