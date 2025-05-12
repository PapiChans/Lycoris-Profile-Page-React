import React, {useContext} from 'react'
import { ThemeContext } from './theme'
import imageMap from './imagepath'

const Loadingscreen = ({ visible }) => {
    const { theme } = useContext(ThemeContext);
    const symbol = 'symbol' + theme;
  
    return (
      <div className={`
        z-50 fixed w-full h-screen transition-opacity duration-500
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        bg-${theme} bg-opacity-100 overflow-y-hidden
      `}>
        <div className='mt-32 w-full h-full p-8'>
          <div className='h-full w-full flex flex-col items-center justify-start'>
            <img className='h-40 w-40 animate-pulse' src={imageMap[symbol]} alt='Symbol' />
            <p className='text-slate-50 text-5xl mt-4 ff-goldman overflow-y-hidden'>Loading...</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Loadingscreen
