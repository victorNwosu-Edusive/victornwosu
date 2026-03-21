
import icon from '../assets/images/favicon.png'
import { useState } from 'react';
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSparkles, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
import { Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, toggleTheme }) {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);

    }

  return (
    <>
      <nav className='z-50 fixed bg-white/70 dark:bg-transparent w-full p-6 md:px-12 flex justify-between items-center backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-500'>
      <div className='flex items-center gap-2'>
      <a href='/' className='text-slate-900 dark:text-white flex gap-2 justify-center items-center font-bold text-lg tracking-tight'>
      <img src={icon} alt="" className='w-8 h-auto'/> × edusive
      </a>
      </div>

      <div className='hidden md:flex items-center gap-8'>
        {[
          { href: "#about-me", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Stack" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className='text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-[#48daf7] font-medium transition-colors duration-300'
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className='flex items-center gap-4'>
        <button
          onClick={toggleTheme}
          className='p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300'
          aria-label='Toggle Theme'
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-slate-900 dark:text-white focus:outline-none relative w-6 h-6">
            <span
              className={`block absolute w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-5 h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>
        
        <a 
          href="#contact"
          className='hidden md:block px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20'
        >
          HIRE ME
        </a>
      </div>
      </nav>

      <div
      id="mobile"
      className={`${
      isOpen ? "translate-x-0" : "translate-x-full"
      } fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white dark:bg-[#040a17] transition-transform duration-500 ease-in-out md:hidden`}
      >
      {[
      { href: "#about-me", label: "About me" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Tech Stack" },
      { href: "#reviews", label: "Process" },
      { href: "#contact", label: "Contact" },
      ].map((link, idx) => (
      <a
      key={link.href}
      href={link.href}
      className={`text-2xl font-bold text-slate-800 dark:text-white hover:text-blue-500 dark:hover:text-[#48daf7] transition-all
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{
        transitionDelay: isOpen ? `${0.1 + idx * 0.1}s` : '0s',
      }}
      onClick={closeMenu}
      >
      {link.label}
      </a>
      ))}
      
      <button
        onClick={closeMenu}
        className='absolute top-6 right-6 p-2 text-slate-900 dark:text-white'
      >
        {/* Close icon already handled by hamburger transformation if we keep it fixed, 
            but here it's easier to just use the toggleMenu call on the parent or keep simple */}
      </button>
      </div>
    </>
    );
}

export default Navbar
