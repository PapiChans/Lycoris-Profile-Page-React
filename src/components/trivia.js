import React, {useContext} from 'react'
import { ContentCategory } from '../master/switchcategory'
import { ThemeContext } from '../master/theme'

// Data
import datachisato from '../data/chisato'
import datatakina from '../data/takina'
import datakurumi from '../data/kurumi'

const Trivia = () => {
  const { category } = useContext(ContentCategory);
  const { theme } = useContext(ThemeContext);

  // intiate data
  const dataMap = {
    chisato: datachisato,
    takina: datatakina,
    kurumi: datakurumi,
  };

  const data = dataMap[theme];

    return (
      <>
          <div className={` ${category === 'trivia' ? 'min-h-screen w-full block' : 'hidden' }`}>
            <h1 className='text-center ff-goldman font-semibold text-4xl overflow-y-hidden'>TRIVIA</h1>
               <div className='flex justify-center'>
                <div className={`w-full h-auto m-4 rounded-lg p-4`}>
                  <ul>
                    {data.trivia.map((trivia, index) => (
                      <li key={index} className={`text-slate-900 m-4 flex text-lg`}>
                        <p className={`transition-all duration-300 border-b-2 border-slate-50 hover:border-slate-600`}>
                          <span className={`text-xl text-${theme} font-bold mr-4`}>{index + 1}.</span>
                          
                          {trivia}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
               </div>
          </div> 
      </>
    )
}

export default Trivia
