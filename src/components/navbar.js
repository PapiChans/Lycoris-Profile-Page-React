import React from 'react';
import Logo from '../assets/logo/logo-with-text.png';

const navbar = () => {
  return (
    <>
      <div className="h-14 w-full bg-slate-200 flex">
        <div className='flex h-full w-6/12 md:w-4/12'>
          <div className='h-full w-full flex items-center px-8'>
            <img src={ Logo } className='h-1/3 md:h-1/2 w-auto cursor-pointer' alt="Logo with text"></img>
          </div>
        </div>
        <div className='flex h-full w-6/12 sm:w-8/12 items-center px-8'>
            <div className='flex md:hidden h-full w-full items-center justify-end'>
                <i class="fa-solid fa-bars text-2xl cursor-pointer"></i>
            </div>
            <div className='hidden md:block h-full w-full'>
                <ul className='flex justify-end h-full w-full ff-goldman text-md font-light'>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Home</li>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Gallery</li>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Bio</li>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Skills</li>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Facts</li>
                  <li className='h-full w-20 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 bg-transparent hover:bg-chisato hover:text-slate-50'>Quotes</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default navbar;
