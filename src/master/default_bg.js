import React from 'react'

const default_bg = ({ children }) => {
  return (
    <>
      <div className='h-screen w-screen bg-slate-100'>
        { children }
      </div>
    </>
  )
}

export default default_bg;
