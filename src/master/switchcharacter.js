import React, {useContext, useState} from 'react';
import { ThemeContext } from './theme';
import Home from '../components/home';

const Switchcharacter = () => {
  const [isSwitchOpen, setIsSwitchOpen] = useState(false);

  const { theme } = useContext(ThemeContext) 

  return (
    <>
      <div className={`bg-slate-900 ${isSwitchOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible' } h-full w-full z-40 fixed transition-all duration-500 ease-in-out`}>
        <div className={`z-40 w-100 h-full block px-4 pt-8 transition-all duration-500 ease-in-out ${isSwitchOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`}>
          <div className={`w-100 flex justify-end px-4`}>
            <i className={`fa-solid fa-close text-2xl cursor-pointer transition-all ease-in-out duration-300 text-slate-50 hover-text-${theme}`} onClick={() => setIsSwitchOpen(false)}></i>
          </div>
          <div className='w-100 grid md:flex items-center justify-center h-full p-8 overflow-y-scroll md:overflow-y-hidden'>
            <div className='w-72 h-96 bg-pink-500 m-4 flex justify-center'>

            </div>
            <div className='w-72 h-96 bg-pink-500 m-4 flex justify-center'>

            </div>
            <div className='w-72 h-96 bg-pink-500 m-4 flex justify-center'>

            </div>
          </div>
        </div>        
      </div>
      <Home openSwitch = {() => setIsSwitchOpen(true)} />
    </>
  )
}

export default Switchcharacter;
