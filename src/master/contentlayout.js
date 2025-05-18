import React, {useContext} from 'react'
import { ThemeContext } from './theme';
import { ContentCategory } from './switchcategory';


const ContentLayout = ({ children }) => {

    const { theme } = useContext(ThemeContext);
    const { category } = useContext(ContentCategory);

  return (
    <>
        <div className={`${category !== 'home' ? `bg-${theme} w-100 h-auto px-8 md:px-8 lg:px-16` : 'hidden' } `}>
            <div className='bg-slate-50 pt-24 px-8'>
            { children } 
            </div>
        </div>
    </>
  )
}

export default ContentLayout
