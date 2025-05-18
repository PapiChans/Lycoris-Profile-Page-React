import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Trivia = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'trivia' ? 'min-h-screen w-full' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>TRIVIA</h1>
          </div> 
      </>
    )
}

export default Trivia
