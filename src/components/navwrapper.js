import React, { useState } from 'react';
import Navbar from './navbar';
import Menu from './menunavbar';

const NavigationWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar openMenu={() => setIsMenuOpen(true)} />
      
      {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default NavigationWrapper;
