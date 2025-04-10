import React from 'react';
import Logo from '../assets/logo/logo-with-text.png';

const navbar = () => {
  return (
    <>
      <div className="h-14 w-full bg-pink-200 bg-opacity-45 flex">
        <div className='flex h-full w-6/12 md:w-4/12'>
          <div className='h-full w-full flex items-center px-8'>
            <img src={ Logo } className='h-1/3 md:h-1/2 w-auto cursor-pointer' alt="Logo with text"></img>
          </div>
        </div>
        <div className='flex h-full w-6/12 sm:w-8/12 items-center px-8'>
            <ul className="flex md:hidden justify-end h-full w-full ff-goldman text-md font-light">
              <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent hover:text-slate-50">
                <i class="z-10 fa-solid fa-bars text-2xl cursor-pointer"></i>
                <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
              </li>
            </ul>
            <div className='hidden md:block h-full w-full'>
              <ul className="flex justify-end h-full w-full ff-goldman text-md font-light">
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Home</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Gallery</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Bio</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Skills</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Facts</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
                <li className="h-full w-20 flex items-center justify-center cursor-pointer relative group transition-all ease-in-out duration-300 bg-transparent">
                  <span className="z-10 group-hover:text-slate-50">Quotes</span>
                  <div className="absolute inset-0 bg-chisato transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-top"></div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default navbar;
