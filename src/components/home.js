import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../master/theme';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

// Import Image Path
import imageMap from '../master/imagepath';
// Import Character Information
import characterInfo from '../master/characterInfo';

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
      <div className="w-full bg-slate-50 pt-12">
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
      <div className="flex-1 w-full px-2 sm:px-8 py-4 flex bg-slate-50">
        <div className={`w-full p-8 text-center text-black text-lg border-t-8 bg-chisato bg-opacity-5 border-${theme} rounded-lg`}>
          <h1 className='ff-goldman text-4xl sm:text-6xl text-slate-950'>{ character.name }</h1>
        </div>
      </div>
    </div>
  );
  
};

export default Home;