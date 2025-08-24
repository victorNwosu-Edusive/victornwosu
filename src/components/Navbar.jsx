
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

      <div
      id="mobile"
      className={`${
      isOpen ? "left-0" : "left-full"
      } lg:hidden fixed grid duration-500 transition-all delay-200 ease-out gap-1 text-left z-40 text-white font-primary text-sm h-auto w-full p-1 px-11 pb-96 pt-48 bg-[#040a17] backdrop-blur-md mx-auto max-w-screen-xl *:text-center`}
      >
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

      {[
      { href: "#about-me", label: "About Me", title: "About Us" },
      { href: "#projects", label: "Projects", title: "Features" },
      { href: "#skills", label: "Tech Stack", title: "Gallery" },
      { href: "#reviews", label: "Reviews", title: "Testimonial" },
      { href: "#contact", label: "Contact Me", title: "Contact Us" },
      ].map((link, idx) => (
      <a
      key={link.href}
      href={link.href}
      className={`md:block font-bold p-2 hover:text-[#48daf7] rounded-md duration-500 text-[17px] transition-all
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: isOpen ? `${0.35 + idx * 0.13}s` : '0s',
      }}
      onClick={closeMenu}
      title={link.title}
      >
      {link.label}
      </a>
      ))}

      <button
      className={`p-2 text-[13px] mx-16 mt-11 font-bold tracking-widest bg-[#48daf7] text-[#040a17] rounded-md flex justify-center items-center gap-3 transition-all
      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
      transitionDelay: isOpen ? `${0.35 + 5 * 0.13}s` : '0s',
      }}
      onClick={closeMenu}
      >
      HIRE ME <FontAwesomeIcon icon={faRocket} className="text-[#040a17] text-[15px]" />
      </button>
      </div>
    </>
    );
}

export default Navbar
