import React from 'react'
import Logo from '../assets/logo/logo-with-text.png';
import { useContext } from 'react';
import { ThemeContext } from '../master/theme';

const menuItems = ['Home', 'Gallery', 'Profile', 'Trivia', 'Credits'];

const Navbar_menu = () => {

    const { theme } = useContext (ThemeContext);

  return (
    <div>
      <div className='block fixed h-full w-full bg-slate-800 bg-opacity-50 blur-lg z-30'></div>
        <div className='z-40 h-full w-80 bg-slate-200 fixed'>
            <div className='w-full h-auto flex justify-end items-center py-4 px-8'>
              <i class={`z-20 fa-solid fa-close text-2xl cursor-pointer transition-all ease-in-out duration-300 text-slate-800 hover-text-${theme}`}></i>
            </div>
            <div className='px-12 pt-4'>
                <img className='w-auto cursor-pointer' alt="Logo" src={Logo}></img>
            </div>
            <ul className='ff-goldman text-lg font-light mt-8'>
                {menuItems.map((item, idx) => (
                  <li key={idx} className='text-dark w-full flex items-center cursor-pointer relative group transition-all ease-in-out duration-500 bg-transparent py-4 pl-8'>
                      <span className="z-40 group-hover:text-slate-50">{item}</span>
                      <div className={`absolute inset-0 bg-${theme} transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left`}></div>
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar_menu;
