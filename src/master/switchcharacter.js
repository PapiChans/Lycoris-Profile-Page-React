import React, {useState} from 'react';
import Home from '../components/home';

const Switchcharacter = () => {
  const [isSwitchOpen, setIsSwitchOpen] = useState(false);



  return (
    <>
      <div onClick={() => setIsSwitchOpen(false)} className={`bg-slate-900 ${isSwitchOpen ? 'opacity-50 visible' : 'opacity-0 invisible' } h-full w-full blur-lg z-40 fixed transition-all duration-500 ease-in-out`}>        
      </div>
      <Home openSwitch = {() => setIsSwitchOpen(true)} />
    </>
  )
}

export default Switchcharacter;
