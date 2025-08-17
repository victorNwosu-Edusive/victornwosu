
import icon from '../assets/images/favicon.png'
import { useState } from 'react';
import '../App.css'

function Navbar() {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <nav className='z-50 fixed bg-transparent w-full md:w-full lg:w-full xl:w-full p-7 flex-wrap flex justify-between items-center backdrop-blur-md'>
        <div className='space-x-3'>
          <a to='/' className='text-white flex gap-1 justify-center items-center font-bold'>
            <img src={icon} alt="" className='w-7 h-auto'/>× edusive
            </a>
        </div>



        <div className='space-x-1 md:space-x-3 lg:space-x-6 flex justify-center items-center'>
        
            <div className="pl-5 " onClick={toggleMenu}>
          <button className="text-white focus:outline-none relative scale-x-[-1] w-6 h-6 z-50">
            <span
              className={`block absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? 'rotate-45 bg-white' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-5 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0 bg-white' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? '-rotate-45 bg-white' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>

        </div>

       
       
        

      </nav>
     

    </>
  )
}

export default Navbar
