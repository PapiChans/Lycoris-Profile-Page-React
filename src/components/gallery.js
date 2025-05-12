import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Gallery = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'gallery' ? 'min-h-screen w-full bg-slate-600' : 'hidden' }`}>
          </div> 
      </>
    )
}

export default Gallery
