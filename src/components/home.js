import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../master/theme';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

// Import Image Path
import imageMap from '../master/imagepath';
// Import Character Information
import characterInfo from '../master/characterInfo';

// Import Background
import background1 from '../assets/background/background-1.jpg';

const Home = () => {
  // Set the Color Pallete
  const { theme } = useContext(ThemeContext);

  // Set the Character Info
  const character = characterInfo[theme];

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      gap: 0,
      autoplay: 5000,
      hoverpause: true,
      keyboard: true,
      animationDuration: 1000,
      animationTimingFunc: 'ease-in-out',
      touchRatio: 0.5,
      breakpoints: {
        768: {
          perView: 1
        }
      }
    }
  );

    glide.mount();

    // Cleanup when component unmounts
    return () => glide.destroy();
  }, []);

  const images = imageMap[theme] || [];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className={`w-full pt-12 bg-${theme} bg-opacity-50`}>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {images.map((src, i) => (
                <li key={i} className="glide__slide">
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-auto object-cover rounded-md brightness-110 contrast-100 saturate-150 cursor-grab"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full px-2 sm:px-8 py-4 flex bg-cover bg-bottom bg-no-repeat saturate-150 relative" style={{ backgroundImage: `url(${background1})` }}>
        <div className={`absolute inset-0 bg-${theme} bg-opacity-50 z-0`} />
          <div className={`relative w-full flex flex-col justify-center items-center p-4 border-t-8 bg-slate-100 bg-opacity-80 border-${theme} rounded-lg shadow-2xl`}>
            <h1 className='ff-goldman text-4xl md:text-5xl sm:text-4xl text-slate-950 text-center'><span className={`text-${theme}`}>-</span>{ character.name }<span className={`text-${theme}`}>-</span></h1>
            <p className={`ff-be-vietnam-pro font-bold text-center ease-in-out transition-all text-slate-950 duration-300 text-lg hover-text-${theme}`}>{character.japanese}</p>
            <p className={`ff-be-vietnam-pro font-normal text-center ease-in-out transition-all text-slate-950 duration-300 text-lg`}>CV: {character.va_japanese}</p>
            <button type='button' className={`h-12 w-40 bg-${theme} transition-all duration-300 ease-in-out hover:brightness-110 rounded-lg`}>
              <p className='ff-be-vietnam-pro font-normal text-center text-slate-50'>Switch Character</p>
            </button>
          </div>
        </div>
      </div>
  );
  
};

export default Home;