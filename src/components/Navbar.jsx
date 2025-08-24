
import icon from '../assets/images/favicon.png'
import { useState } from 'react';
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSparkles, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';

function Navbar() {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);

    }

  return (
    <>
      <nav className='z-40 fixed bg-transparent w-full md:w-full lg:w-full xl:w-full p-7 flex-wrap flex justify-between items-center backdrop-blur-md'>
        <div className='space-x-3'>
          <a to='/' className='text-white flex gap-1 justify-center items-center font-bold'>
            <img src={icon} alt="" className='w-7 h-auto'/>× edusive
            </a>
        </div>



        <div className='space-x-1 md:space-x-3 lg:space-x-6 flex justify-center items-center'>
        
            <div className="pl-5" onClick={toggleMenu}>
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

      <div id="mobile" className={`${
          isOpen ? "left-0" : "left-full"
        }  fixed grid duration-500 transition-all delay-200 ease-out gap-1 text-left z-40 text-white font-primary text-sm h-auto w-full p-1 px-11 pb-96 pt-48 bg-[#040a17] backdrop-blur-md mx-auto max-w-screen-xl *:text-center `}>
          
          <div className="absolute top-8 right-8" onClick={toggleMenu}>
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

          <a href="#about-me" className="md:block  font-bold p-1 hover:text-[#48daf7] rounded-md duration-300 text-[17px]" onClick={closeMenu} title="About Us">About Me </a>
          <a href="#projects" className="md:block  font-bold p-1 hover:text-[#48daf7] rounded-md  duration-300 text-[17px] " onClick={closeMenu} title='Features'>Projects</a>
          <a href="#skills" className="md:block  font-bold p-1 hover:text-[#48daf7] rounded-md  duration-300 text-[17px] " onClick={closeMenu} title='Gallery'>Tech Stack</a>
          <a href="#reviews" className="md:block  font-bold p-1 hover:text-[#48daf7] rounded-md duration-300 text-[17px] " onClick={closeMenu} title='Testimonial'>Reviews</a>
          <a href="#contact" className="md:block  font-bold p-1 hover:text-[#48daf7] rounded-md  duration-300 text-[17px]" onClick={closeMenu} title='Contact Us'>Contact Me</a>
            <button className='p-2 text-[13px] mx-16 mt-11 font-bold tracking-widest bg-[#48daf7] text-[#040a17] rounded-md flex justify-center items-center gap-3'>HIRE ME <FontAwesomeIcon icon={faRocket} className="text-[#040a17] text-[15px]" /></button>
      </div>

      
     

    </>
  );
}

export default Navbar
