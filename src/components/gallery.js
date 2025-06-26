import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../master/theme';
import { ContentCategory } from '../master/switchcategory';

// Import Image Path
import imageMap from '../master/imagepath';

const Gallery = () => {
  const { category } = useContext(ContentCategory);

  // Set the Color Pallete
  const { theme } = useContext(ThemeContext);

  const images = imageMap[theme] || [];
  
    return (
      <>
          <div className={` ${category === 'gallery' ? 'min-h-screen w-full block' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>GALLERY</h1>
            <div className='flex justify-center'>
              <div className={`w-full h-auto m-4 rounded-lg p-4`}>
                <div className='w-full h-auto'>
                  {images.map((src, i) =>  (
                    <li key={i} className="">
                    <img
                      src={src}
                      alt={`${theme + 1}`}
                      className="w-full h-auto rounded-md brightness-110 contrast-100 saturate-150 cursor-pointer"
                    />
                  </li>
                  ))}
                </div>
              </div>
          </div>
          </div> 
      </>
    )
}

export default Gallery
