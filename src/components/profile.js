import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory';

const Profile = () => {
  
  const { category } = useContext(ContentCategory);

  return (
    <>
        <div className={` ${category === 'profile' ? 'min-h-screen w-full bg-slate-600' : 'hidden' }`}>
        </div> 
    </>
  )
}

export default Profile
