import React, { createContext, useState } from 'react'

export const ContentCategory = createContext();

export const ContentProvider = ({ children }) => {
    const [category, setCategory] = useState('home');
    return (
        <ContentCategory.Provider value = {{category,setCategory}}>
            {children}
        </ContentCategory.Provider>
    );
}
