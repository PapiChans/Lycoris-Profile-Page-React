import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Gallery = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'gallery' ? 'min-h-screen w-full' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>GALLERY</h1>
          </div> 
      </>
    )
}

export default Gallery
