import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory';
import { ThemeContext } from '../master/theme'

// Data
import datachisato from '../data/chisato'
import datatakina from '../data/takina'
import datakurumi from '../data/kurumi'

// Model
import modelchisato from '../assets/models/chisato-nishikigi.png'
import modeltakina from '../assets/models/takina-inoue.png'
import modelkurumi from '../assets/models/kurumi.png'

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { category } = useContext(ContentCategory);

  // intiate data
  const dataMap = {
    chisato: datachisato,
    takina: datatakina,
    kurumi: datakurumi,
  };

  const modelMap = {
    chisato: modelchisato,
    takina: modeltakina,
    kurumi: modelkurumi,
  };

  const data = dataMap[theme];
  const model = modelMap[theme];

  return (
    <>
        <div className={` ${category === 'profile' ? 'min-h-screen w-full block' : 'hidden' }`}>
          <h1 className='text-center ff-goldman font-semibold text-5xl overflow-y-hidden'>PROFILE</h1>
          <div className='flex justify-center'>
            <div className={`w-full h-auto m-4 rounded-lg p-4`}>
              <div className='flex justify-center'>
                <div className={`bg-${theme} bg-opacity-10 w-80 h-full border-4 border-${theme} rounded-md overflow-y-hidden cursor-pointer flex justify-center`}>
                  <img className='h-96 scale-100 transition-all duration-500 ease-in-out hover:scale-125' src={model} alt="image_model"></img>
                </div>
              </div>
            </div>
          </div>
          <h1 className='ff-goldman text-4xl md:text-5xl sm:text-4xl text-slate-950 text-center overflow-y-hidden'><span className={`text-${theme}`}>-</span>{ data.name }<span className={`text-${theme}`}>-</span></h1>
            <p className={`ff-be-vietnam-pro font-bold text-center ease-in-out transition-all text-slate-950 duration-300 text-lg hover-text-${theme}`}>{data.japanese}</p>
            <p className={`ff-be-vietnam-pro font-normal text-center ease-in-out transition-all text-slate-950 duration-300 text-lg`}>CV: {data.va_japanese}</p>
        </div> 
    </>
  )
}

export default Profile
