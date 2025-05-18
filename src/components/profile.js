import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory';

const Profile = () => {
  
  const { category } = useContext(ContentCategory);

  return (
    <>
        <div className={` ${category === 'profile' ? 'min-h-screen w-full' : 'hidden' }`}>
          <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>PROFILE</h1>
        </div> 
    </>
  )
}

export default Profile
