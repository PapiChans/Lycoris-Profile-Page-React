import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../master/theme';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

import imageMap from '../master/imagepath';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 1000,
      animationTimingFunc: 'ease-in-out',
    });

    glide.mount();

    // Cleanup when component unmounts
    return () => glide.destroy();
  }, []);

  const images = imageMap[theme] || [];


  return (
    <>
      <div className='z-0 h-screen w-full'>
        <div className='h-3/4 w-full flex bg-red-300'>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {images.map((src, i) => (
                  <li key={i} className="glide__slide">
                    <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
                  </li>
                ))}
              </ul>
            </div>
            <div data-glide-el="controls">
              <button data-glide-dir="<<">Start</button>
              <button data-glide-dir=">>">End</button>
            </div>
          </div>
        </div>
        <div className='h-1/4 w-full bg-orange-300'></div>
      </div>
    </>
  );
};

export default Home;