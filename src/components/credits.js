import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'
import { ThemeContext } from '../master/theme'
import creatorLogo from '../assets/logo.png'
import projectLogo from '../assets/chisato_icon.png'

// Source
import source from '../data/source'

const Credits = () => {
  const { category } = useContext(ContentCategory);
  const { theme } = useContext(ThemeContext);
  const sources = source;

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
                <div className='p-4 h-auto w-full flex justify-center items-center'>
                  <img src={projectLogo} alt='creatorLogo' className={`h-72 w-72 border-2 border-${theme} rounded-lg`} />
                </div>
                <p className='ff-be-vietnam-pro mt-4 text-justify'>This project is for Front-end practice only, specially React.JS. My admires for anime and my dedicated skills as a Developer will lead me to create new Projects that I like to make just for my own purposes and at the same time
                  it can be also my practice ground and showcasing my skills. This serves as my projects that I want to show, showing mt skills when it comes to programming or developing. Also my love for anime made me inspire to do things that even unoffical but in my own safisfaction. Feel free
                  to browse more.
                </p>
                <p className='ff-be-vietnam-pro mt-4 text-justify'>
                  Lycoris Recoil is one of my great Anime that I ever watched maybe due to my likings of genre in shows such as action and girls. This only shows the info for them just to show how the project works. All of the images and the information cames from different resources and sources,
                  giving them a credits as the purpose of this is for personal purposes only.
                </p>
                <h1 className={`text-center ff-goldman font-semibold text-3xl overflow-y-hidden ${ theme === 'kurumi' ? 'text-slate-900' : 'text-slate-50' } bg-${theme} rounded-lg p-4 mt-4`}>Sources</h1>
                <ul className={`ff-be-vietnam-pro p-4`}>
                 <p className='ff-goldman text-2xl'>Wiki</p>
                  {sources.Wiki.map((url, index) => (
                    <li key={index} className={`text-slate-900 m-4`}>
                      <a href={url} target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 border-b-2 border-slate-50 hover:border-slate-600`}>
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
      </>
    )
}

export default Credits
