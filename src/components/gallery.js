import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../master/theme';
import { ContentCategory } from '../master/switchcategory';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

import imageMap from '../master/imagepath';

const Gallery = () => {
  const { category } = useContext(ContentCategory);
  const { theme } = useContext(ThemeContext);
  const images = imageMap[theme] || [];

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [images]);

  return (
    <>
      <div className={`${category === 'gallery' ? 'min-h-screen w-full block' : 'hidden'}`}>
        <h1 className="text-center ff-goldman font-semibold text-5xl overflow-y-hidden">GALLERY</h1>
        <div className="flex justify-center">
          <div className="w-full h-auto m-4 rounded-lg p-4">
            <ul className="w-full h-auto grid md:grid-cols-2 grid-cols-1 gap-4 list-none p-0">
              {images.map((src, i) => (
                <li key={i} className="w-full flex justify-center">
                  <a href={src} className="glightbox" data-gallery="gallery1" data-effect="fade">
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-96 h-52 object-cover rounded-md brightness-110 contrast-100 saturate-150 cursor-pointer"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
