import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Credits = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'credits' ? 'min-h-screen w-full bg-red-600' : 'hidden' }`}>
          </div> 
      </>
    )
}

export default Credits
