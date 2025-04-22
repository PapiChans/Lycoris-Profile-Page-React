import React from 'react'
import Logo from '../assets/logo/logo-with-text.png';
import { useContext } from 'react';
import { ThemeContext } from '../master/theme';

const Navbar_menu = () => {

    const { theme } = useContext (ThemeContext);

  return (
    <div>
      <div className='block fixed h-full w-full bg-slate-800 bg-opacity-50 blur-lg z-30'></div>
        <div className='z-40 h-full w-80 bg-slate-200 fixed'>
            <div className='px-12 pt-12 bg-red-200'>
                <img className='w-auto cursor-pointer' alt="Logo" src={Logo}></img>
            </div>
            <ul className='ff-goldman text-xl font-light mt-8'>
                <li className='text-dark bg-orange-400 p-4'>
                    Text
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar_menu;
