import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

// Importing the default BG color
import DefaultBG from './master/default_bg';
// Color Pallete
import { ThemeProvider } from './master/theme';
// Content Category
import { ContentProvider } from './master/switchcategory';

// Components
import LoadingScreen from './master/loadingscreen';
import NavbarWrapper from './components/navwrapper';
import SwitchCharacter from './master/switchcharacter';
import Gallery from './components/gallery';
import Profile from './components/profile';
import Trivia from './components/trivia';
import Credits from './components/credits';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(

  <React.StrictMode>
    <DefaultBG>
      <ThemeProvider>
        <ContentProvider>
          <LoadingScreen />
          <NavbarWrapper />
          <SwitchCharacter/>
          <Gallery />
          <Profile />
          <Trivia />
          <Credits />
        </ContentProvider>
      </ThemeProvider>
    </DefaultBG>
  </React.StrictMode>
);