import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../master/theme';
import Logo from '../assets/logo/logo-with-text.png';
import { ContentCategory } from '../master/switchcategory';
import Loadingscreen from '../master/loadingscreen';

const menuItems = ['Home', 'Gallery', 'Profile', 'Trivia', 'Credits'];

const NavbarMenu = ({ closeMenu }) => {
  const { theme } = useContext(ThemeContext);
  const { setCategory } = useContext(ContentCategory);
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 10);
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => closeMenu(), 300); 
  };

  const handleswitch = (item) => {
    setIsLoading(true);
    setTimeout(() => {
      setCategory(item.toLowerCase());
    }, 500)
    setTimeout(() => {
      handleClose();
    }, 1000)
    setTimeout(() => {
      setIsLoading(false);
    }, 1100)
  }

  return (
    <>
    <Loadingscreen visible={isLoading} />
    <div>
      <div onClick={handleClose} className={`block fixed h-full w-full bg-slate-800 bg-opacity-50 blur-lg z-30 ${animate ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className={`z-40 h-full w-80 bg-slate-100 bg-opacity-50 fixed transform transition-transform duration-300 overflow-y-hidden ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='w-full h-auto flex justify-end items-center py-4 px-8'>
          <i 
            className={`z-20 fa-solid fa-close text-2xl cursor-pointer transition-all ease-in-out duration-300 text-slate-800 hover-text-${theme}`} 
            onClick={handleClose}
          ></i>
        </div>
        
        <div className='px-12'>
          <img className='w-auto cursor-pointer' alt="Logo" src={Logo}></img>
        </div>
        
        <ul className='ff-goldman text-lg font-light mt-4'>
          {menuItems.map((item, idx) => (
            <li 
              key={idx} 
              className='text-dark w-full flex items-center cursor-pointer relative group transition-all ease-in-out duration-1000 bg-transparent py-4 pl-8'
              onClick={() => handleswitch(item)}>
              <span className="z-40 group-hover:text-slate-50 text-md">{item}</span>
              <div 
                className={`absolute inset-0 bg-${theme} transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}
                ></div>
            </li>
          ))}
        </ul>
        <div className='flex w-full h-full justify-center'>
        </div>
      </div>
    </div>
    </>
  );
};

export default NavbarMenu;