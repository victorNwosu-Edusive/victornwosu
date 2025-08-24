
import heroImage from './assets/images/hero-image.jpeg'
import google from './assets/images/google.svg'
import youtube from './assets/images/youtube.svg'
import aboutPics from './assets/images/about-image.jpg'
import projectOne from './assets/images/project-one.jpg'
import projectTwo from './assets/images/screenshot.png'
import projectThree from './assets/images/eltronc.png'
import projectFour from './assets/images/akar.png'
import city from './assets/images/manchester-city.svg'
import nextjs from './assets/images/nextjs.svg'
import tailwindcss from './assets/images/tailwind-css-svgrepo-com.svg'
import {faEnvelope, faFilePdf, } from "@fortawesome/free-solid-svg-icons";
import { faBehanceSquare, faCss, faFigma, faGithub, faInstagram, faInstagramSquare, faJs, faLinkedin, faNodeJs, faReact, faUpwork, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './App.css'
import Navbar from './components/Navbar'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive'
import { faArrowDownUpAcrossLine } from '@fortawesome/free-solid-svg-icons/faArrowDownUpAcrossLine'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'

function App() {
  
  return (
    <>
    <Navbar />
      <div className='bg-[#040a17] h-auto text-white'>
        <div className='p-11 pt-40 pb-48 md:pt-40 lg:pt-40 md:p-44 lg:p-44'>
          <div className='grid gap-10 md:gap-4 lg:gap-4 md:grid-cols-2 lg:grid-cols-2'>

            <div>
            <h1 className='text-[13px] md:text-[14px] lg:text-[14px] text-[#48daf7] tracking-widest font-bold mb-4'>HELLO WORLD!</h1>
          <h1 className='text-3xl md:text-4xl lg:text-4xl'>I'm <span className='font-bold'>Victor Nwosu</span></h1>
        <p className='text-[17px] md:text-2xl lg:text-2xl'>Frontend Web Developer</p>
        <p className='text-sm mt-2 mb-8'>Creator  .  Tech Enthusiast</p>
        <div className='flex gap-3'>
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
        <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
        <FontAwesomeIcon icon={faUpwork} className="text-white text-xl" />
        </div>
        <button className='px-7 py-1 border-[1px] bg-[#07122b] border-slate-600 rounded-md mt-8 hover:text-[#48daf7] duration-300 flex gap-3 hover:gap-5'>Hire me <p>&#8594;</p> </button>
        </div>

        <div>
          <img src={heroImage} alt="" className='rounded-xl h-60 w-auto shadow-[0_0_40px_#48daf7]' />
        </div>

        </div>
        </div>

        <div className='p-4 bg-gradient-to-r from-[#2fcde1] to-[#062b47] mx-7'>
          <div className='flex gap-3 items-center'>
            <a className='bg-transparent border-[1.5px] cursor-pointer hover:bg-white/25 duration-300 text-sm border-white rounded-md px-6 p-2 flex gap-3 justify-center items-center' href='https://drive.google.com/file/d/1-zPsCcv5sq_ALAEfcMxrAzJtiV4mHXts/view?usp=drivesdk'><FontAwesomeIcon icon={faGoogleDrive} className="text-white text-sm" /> Download Resume</a>
            <p>&#10229;</p>
          </div>

        </div>
        
        <div id='about-me' className='p-11 pt-36 md:p-20 lg:p-20'>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-3 gap-8'>
            <div>
            <h1 className='text-2xl md:text-4xl lg:text-4xl font-bold'>About me</h1>
            <p className='text-base text-slate-300'>Get to know me</p>
              <p className='text-[14px] mt-5'>
              I'm Victor, I'm a Tech enthusiast, a visionary, a Christian, a Frontend 
              Web Developer (mentored and self-taught) and a Visual designer. I also love football (a City fan btw) and Fashion. I always strive to do things conscientiously and 
              continuously work on becoming better at everything I do. I'm skilled in UI design and work with various programming languages, 
              libraries, and frameworks to create seamless and responsive web applications. I'm open to connections 
              and Tech opportunities.
              </p>

                {/*<h1 className='font-bold mt-6 mb-2'>Interests:</h1>
                <div className=' rounded-xl md:p-2 lg:p-2 px-6 bg-[#0a1838] border-slate- w-fit flex justify-items-start gap-3 '>
                <img src={city} alt="" className='w-14' />
                <img src={google} alt="" className='w-10' />
                <img src={youtube} alt="" className='w-10' />
              </div>*/}
            </div>

            <div className='flex justify-center items-center'>
              <img src={aboutPics} alt="" className='h-96 w-auto object-cover md:object-contain lg:object-contain justify-center items-center rounded-xl ring-4 ring-[#48daf7] ring-offset-2 ring-offset-black' />
            </div>

          </div>
        </div>

        
        <div id='projects' className='p-11 pt-36 md:p-20 lg:p-20'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <p className='text-sm text-slate-300 mb-20'>Take a look at my projects and past works and see what resonates with you.</p>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8'>
        <div className='bg-[#050e23] border-[1px] border-slate-600 rounded-2xl'>
          <img src={projectOne} alt="" className='object-cover duration-300 h-60 w-auto' />
          <div className='p-4'>
          <p className='font-bold mt-5 mb-5 cursor-pointer hover:text-[#48daf7] duration-300'>Top Recipe Book</p>
          <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          <FontAwesomeIcon icon={faBehanceSquare} className="text-white text-2xl" />
          </div>
          <a href="https://top-recipe-book.vercel.app/" target="_blank" className='px-7 py-1 border-[1px] bg-[#07122b] hover:bg-slate-300/10 duration-300 border-slate-600 rounded-md text-white text-[13px]'>View Live &#8599;</a>
          </div>


          </div>


        </div>

        <div className='bg-[#050e23] border-[1px] border-slate-600 rounded-2xl'>
          <img src={projectThree} alt="" className='object-cover duration-300 h-60 w-auto' />
          <div className='p-4'>
          <p className='font-bold mt-5 mb-5 cursor-pointer hover:text-[#48daf7] duration-300'>Eltroncs</p>
          <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          <FontAwesomeIcon icon={faBehanceSquare} className="text-white text-2xl" />
          </div>
          <a href="https://eltroncs.vercel.app/" target='_blank' className='px-7 py-1 border-[1px] bg-[#07122b] hover:bg-slate-300/10 duration-300 border-slate-600 rounded-md text-white text-[13px]'>View Live &#8599;</a>
          </div> 


          </div>


        </div>

        <div className='bg-[#050e23] border-[1px] border-slate-600 rounded-2xl'>
          <img src={projectFour} alt="" className='object-cover duration-300 h-60 w-auto' />
          <div className='p-4'>
          <p className='font-bold mt-5 mb-5 cursor-pointer hover:text-[#48daf7] duration-300'>Akar Estates</p>
          <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          <FontAwesomeIcon icon={faBehanceSquare} className="text-white text-2xl" />
          </div>
          <a href="https://akar-estates.vercel.app/" target='_blank' className='px-7 py-1 border-[1px] bg-[#07122b] hover:bg-slate-300/10 duration-300 border-slate-600 rounded-md text-white text-[13px]'>View Live &#8599;</a>
          </div>


          </div>


        </div>


        <div className='bg-[#050e23] border-[1px] border-slate-600 rounded-2xl'>
        <img src={projectTwo} alt="" className='object-cover h-60 w-auto' />
        <div className='p-4'>
        <p className='font-bold mt-5 mb-5 cursor-pointer hover:text-[#48daf7] duration-300'>Explore Nigeria</p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-3'>
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          <FontAwesomeIcon icon={faBehanceSquare} className="text-white text-2xl" />
          </div>
          <a href="https://explore-nigeria.vercel.app/" target='_blank' className='px-7 py-1 border-[1px] bg-[#07122b] hover:bg-slate-300/10 duration-300 border-slate-600 rounded-md text-white text-[13px]'>View Live &#8599;</a>
          </div>
          
          </div>

        </div>
        </div>

        </div>


        <div id='skills' className='p-11 pt-36 md:p-20 lg:p-20'>
        <h1 className='text-2xl font-bold mb-8'>Skills & Tech Stack</h1>
        </div>
        <div className='grid md:px-10 lg:px-20 pb-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 *:cursor-pointer *:border-slate-700 *:border-[1px] '>
        
        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
          <p className='font-bold gap-4 flex text-[13px] md:text-base lg:text-base'> <FontAwesomeIcon icon={faReact} className="text-white text-2xl" /> React.js</p>
        </div> 

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex text-[13px] md:text-base lg:text-base'> <FontAwesomeIcon icon={faNodeJs} className="text-white text-2xl" />Node.js</p>
        </div>

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex text-[13px] md:text-base lg:text-base'> <img src={tailwindcss} alt="" className='w-auto h-7' />TailwindCSS</p>
        </div>

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex text-[13px] md:text-base lg:text-base'> <FontAwesomeIcon icon={faJs} className="text-white text-2xl" />JavaScript</p>
        </div>

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex text-[13px] md:text-base lg:text-base'> <FontAwesomeIcon icon={faCss} className="text-white text-2xl" />CSS</p>
        </div>

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex justify-center text-[13px] md:text-base lg:text-base'> <FontAwesomeIcon icon={faFigma} className="text-white text-2xl" />Figma</p>
        </div>

        <div className='p-5 flex justify-center items-center bg-[#050e23] duration-300 hover:bg-[#091328]'>
        <p className='font-bold gap-4 flex justify-center items-center text-[13px] md:text-base lg:text-base'><img src={nextjs} alt="" className='w-auto h-7' /> Next.js</p>
        </div>

        </div>

        <div id='reviews' className='p-11 pt-36 md:p-20 lg:p-20'>
        <h1 className='text-2xl font-bold'>Process</h1>
        <p className='text-sm text-slate-300 mb-20'>I use the Agile model of development</p>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-7'>
        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Plan</p>
          <p className='text-sm relative z-30'>I start by understanding the project requirements and breaking the into smaller tasks. I define what features to build and how they should function</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>01</h1>
        </div>

        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Design</p>
          <p className='text-sm z-30 relative'>I create wireframes or UI mockups to visualize the layout and user experience.</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>02</h1>
        </div>

        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Develop</p>
          <p className='text-sm z-30 relative'>I write clean, efficient code. I focus on making the UI responsive and interactive.</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>03</h1>
        </div>

        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Test</p>
          <p className='text-sm z-30 relative'>I check for UI inconsistencies, functionality errors, and responsiveness across different devices.</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>04</h1>
        </div>

        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Deploy</p>
          <p className='text-sm z-30 relative'>I push the project live. I enusre everything runs smoothly in a real-world environment.</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>05</h1>
        </div>

        <div className='relative bg-gradient-to-r from-[#050e23] to-[#061a47] border-[1px] border-slate-600 rounded-2xl'>
          <div className='p-9'>
          <p className='font-bold mt-5 text-2xl mb-7'>Review</p>
          <p className='text-sm z-30 relative'>I analyze how the application performs, get feedback, and see what needs imporvement.</p>
          </div>
          <h1 className='text-7xl text-[#142b60]/65 font-bold absolute bottom-0'>06</h1>
        </div>



        </div>

        </div>

        <footer id='contact' className='bg-[#050e1b] p-11 text-center'>
          <h1 className='text-3xl font-bold mb-6'><span className='italic'>Connect</span> with me</h1>
          <div className='grid grid-cols-1 md:flex lg:flex md:justify-center lg:justify-center gap-3 mb-12'>
            <div className='flex gap-3 items-center'>
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" /> <p className='text-sm'>nwosuuvictor@gmail.com</p>
            </div>

            <div className='flex gap-3 items-center'>
          <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl" /> <p className='text-sm'>@only_one_victor</p>
            </div>

            <div className='flex gap-3 items-center'>
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" /> <p className='text-sm'>victor-nwosu</p>
            </div>

            <div className='flex gap-3 items-center'>
          <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" /> <p className='text-sm'>@nwosuuvictor</p>
            </div>

          </div>

          <p className='text-[12px] text-center'>Developed by Victor-Nwosu</p>
        </footer>

        
      </div>
    </>
  )
}

export default App
