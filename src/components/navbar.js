import React from 'react';
import Logo from '../assets/logo/logo-with-text.png';
import { useContext } from 'react';
import { ThemeContext } from '../master/theme';

const menuItems = ['Home', 'Gallery', 'Bio', 'Skills', 'Facts', 'Quotes'];

const Navbar = () => {

  const { theme } = useContext (ThemeContext);

  return (
    <>
      <div className="z-10 h-14 w-full bg-slate-50 backdrop-blur-sm bg-opacity-20 flex fixed">
        <div className='flex h-full w-6/12 md:w-4/12'>
          <div className='h-full w-full flex items-center px-8'>
            <img src={ Logo } className='h-1/3 md:h-1/2 w-auto cursor-pointer' alt="Logo with text"></img>
          </div>
        </div>
        <div className='flex h-full w-6/12 sm:w-8/12 items-center px-8'>
            <ul className="flex md:hidden justify-end h-full w-full ff-goldman text-md font-light">
              <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent hover:text-slate-50">
                <i class="z-20 fa-solid fa-bars text-2xl cursor-pointer"></i>
                <div className={`absolute inset-0 bg-${theme} transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top`}></div>
              </li>
            </ul>
            <div className='hidden md:block h-full w-full'>
              <ul className="flex justify-end h-full w-full ff-goldman text-md font-light">
              {menuItems.map((item, idx) => (
                <li key={idx} className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-20 group-hover:text-slate-50">{item}</span>
                  <div className={`absolute inset-0 bg-${theme} transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top`}></div>
                </li>
              ))}
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
