import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'

const Trivia = () => {
  const { category } = useContext(ContentCategory);
  
    return (
      <>
          <div className={` ${category === 'trivia' ? 'min-h-screen w-full bg-red-600' : 'hidden' }`}>
          </div> 
      </>
    )
}

export default Trivia
