import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Gallery = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'gallery' ? 'min-h-screen w-full block' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>GALLERY</h1>
            <div className='flex justify-center'>
              <div className={`w-full h-auto m-4 rounded-lg p-4`}>
              </div>
          </div>
          </div> 
      </>
    )
}

export default Gallery
