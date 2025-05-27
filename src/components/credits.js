import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'
import { ThemeContext } from '../master/theme'
import creatorLogo from '../assets/logo.png'

const Credits = () => {
  const { category } = useContext(ContentCategory);
  const { theme } = useContext(ThemeContext);
  
    return (
      <>
          <div className={` ${category === 'credits' ? 'min-h-screen w-full block' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-4xl overflow-y-hidden'>CREDITS</h1>
            <div className='flex justify-center'>
              <div className={`w-full h-auto m-4 rounded-lg p-4`}>
                  <h1 className={`text-center ff-goldman font-semibold text-3xl overflow-y-hidden ${ theme === 'kurumi' ? 'text-slate-900' : 'text-slate-50' } bg-${theme} rounded-lg p-4`}>Disclaimer</h1>
                  <div className={`bg-${theme} text-md ${ theme === 'kurumi' ? 'text-slate-900' : 'text-slate-50' } bg-opacity-70 ff-be-vietnam-pro rounded-lg mt-4 p-4`}>
                    <p className='m-2'>This project is created for <span className='font-bold'>educational and practice purposes only.</span></p>
                    <p className='m-2'>All anime-related logos, characters, and images used are the property of their respective copyright holders.</p>
                    <p className='m-2'>This project is <span className='font-bold'>not intended for commercial use</span> or profit. It is a <span className='font-bold'>non-commercial, portfolio</span> project aimed at improving React and front-end development skills.</p>
                    <p className='m-2'>Feel free to view and explore the code for learning purposes.</p>
                  </div>
              </div>
            </div>
            <div className='m-4 rounded-lg p-4'>
              <h1 className={`text-center ff-goldman font-semibold text-3xl overflow-y-hidden ${ theme === 'kurumi' ? 'text-slate-900' : 'text-slate-50' } bg-${theme} rounded-lg p-4`}>About the creator</h1>
                <div className='h-auto w-full mt-4 block md:flex'>
                  <div className='p-4 h-auto w-full md:w-1/3 flex justify-center items-center'>
                    <img src={creatorLogo} alt='creatorLogo' className={`h-72 w-72 border-2 border-${theme} rounded-lg`} />
                  </div>
                  <div className='p-8 h-auto w-full md:w-2/3'>
                    <h1 className='text-center md:text-start ff-goldman font-semibold text-4xl overflow-y-hidden'>PapiChans</h1>
                    <div className="w-full h-auto flex md:justify-start sm:justify-center justify-center">
                      <a href='https://github.com/papichans' target='_blank' rel='noopener noreferrer'>
                        <button className={`w-auto h-auto bg-${theme} py-2 px-20 mt-4 ff-be-vietnam-pro transition-all duration-300 ease-in-out hover:bg-opacity-70 text-slate-50 rounded-xl`}>
                          GitHub
                        </button>
                      </a>
                    </div>
                    <p className='ff-be-vietnam-pro mt-4 text-justify'>PapiChans is a Programmer / Web Developer who trying to pursue of being a programmer, creating this project to improve my React.JS skills. Im just a programmer passing by, remember that.</p>
                  </div>
                </div>
            </div>
             <div className='m-4 rounded-lg p-4'>
              <h1 className={`text-center ff-goldman font-semibold text-3xl overflow-y-hidden ${ theme === 'kurumi' ? 'text-slate-900' : 'text-slate-50' } bg-${theme} rounded-lg p-4`}>About the project</h1>
            </div>
          </div>
      </>
    )
}

export default Credits
