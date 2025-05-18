import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Credits = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'credits' ? 'min-h-screen w-full' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>CREDITS</h1>
          </div> 
      </>
    )
}

export default Credits
