import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'
import { ThemeContext } from '../master/theme'

const Credits = () => {
  const { category } = useContext(ContentCategory);
  const { theme } = useContext(ThemeContext);
  
    return (
      <>
          <div className={` ${category === 'credits' ? 'min-h-screen w-full block' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-4xl overflow-y-hidden'>CREDITS</h1>
            <div className='flex justify-center'>
              <div className={`w-full h-auto m-4 bg-${theme} bg-opacity-90 rounded-md p-4`}>
                  <h1 className='text-center ff-goldman font-semibold text-3xl overflow-y-hidden text-slate-50'>Disclaimer</h1>
                  <div className='text-md text-slate-50 ff-be-vietnam-pro mt-4'>
                    <p className='m-2'>This project is created for <span className='font-bold'>educational and practice purposes only.</span></p>
                    <p className='m-2'>All anime-related logos, characters, and images used are the property of their respective copyright holders.</p>
                    <p className='m-2'>This project is <span className='font-bold'>not intended for commercial use</span> or profit. It is a <span className='font-bold'>non-commercial, portfolio</span> project aimed at improving React and front-end development skills.</p>
                    <p className='m-2'>Feel free to view and explore the code for learning purposes.</p>
                  </div>
              </div>
            </div>
          </div> 
      </>
    )
}

export default Credits
