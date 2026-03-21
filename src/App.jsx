import { useState, useEffect } from 'react'
import heroImage from './assets/images/hero-image.jpeg'
import google from './assets/images/google.svg'
import youtube from './assets/images/youtube.svg'
import aboutPics from './assets/images/about-image.jpg'
import projectOne from './assets/images/project-one.jpg'
import projectTwo from './assets/images/screenshot.png'
import projectThree from './assets/images/eltronc.png'
import projectFour from './assets/images/akar.png'
import projectSun from './assets/images/sun.png'
import city from './assets/images/manchester-city.svg'
import {faEnvelope, faFile, faFileAlt, faFilePdf, faCode, } from "@fortawesome/free-solid-svg-icons";
import { faBehanceSquare, faCss, faFigma, faGithub, faGithubAlt, faGithubSquare, faInstagram, faInstagramSquare, faJs, faLinkedin, faNodeJs, faReact, faUpwork, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './App.css'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleClick = () => {
    window.open("https://github.com/victorNwosu-Edusive", "_blank");
  };
  
  return (
    <div className='min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30'>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className='bg-white dark:bg-[#040a17] text-slate-900 dark:text-white transition-colors duration-500'>
        {/* Hero Section */}
        <section className='relative overflow-hidden min-h-[85vh] flex items-center justify-center py-36 px-6 md:px-12'>
          {/* Background Decorative Blobs */}
          <div className='absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
          
          <div className='max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10'>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold mb-6'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                </span>
                Available for Work
              </div>
              
              <h1 className='text-sm md:text-base text-blue-500 dark:text-[#48daf7] font-black mb-4 uppercase'>HELLO WORLD!</h1>
              <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight'>
                I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>Victor Nwosu</span>
              </h2>
              <p className='text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-6'>
                Frontend Engineer • Tech Speaker
              </p>
              <p className='text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed'>
                Building world-class products from Africa for the global stage with modern, responsive, and user-first web engineering.
              </p>
              
              <div className='flex flex-wrap gap-4'>
                <button 
                  onClick={handleClick}
                  className='text-sm flex items-center gap-3 px-7 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-blue-500/20'
                >
                  <FontAwesomeIcon icon={faGithub} /> GITHUB
                </button>
                <a 
                  href="#projects"
                  className='text-sm flex items-center gap-3 px-7 py-2 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300'
                >
                  VIEW WORK
                </a>
              </div>
            </motion.div>

            <div className='relative'>
              <img 
                src={heroImage} 
                alt="Victor Nwosu" 
                className='relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]' 
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about-me' className='py-32 px-6 md:px-12 bg-slate-50 dark:bg-white/5'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-16 items-center'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-4xl md:text-5xl font-black mb-2 tracking-tight'>About me</h2>
                <p className='text-blue-600 dark:text-blue-400 font-bold mb-8'>Get to know me</p>
                <div className='space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed'>
                  <p>
                    I'm Victor, a Computer Science graduate, visionary, and Frontend Engineer & Tech Speaker with over 6 years of experience in building digital products from Africa for the world.
                  </p>
                  <p>
                    I specialize in building high-performance, accessible, and culturally aware web applications. My approach is product-focused, designed for global markets with African innovation at the core.
                  </p>
                </div>

                <div className='mt-10'>
                  <a 
                    href='https://drive.google.com/file/d/1GTossPASvljVXiBq0-xUsskL6OtUq03F/view?usp=drivesdk'
                    target='_blank'
                    className='inline-flex text-sm items-center gap-3 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25'
                  >
                    <FontAwesomeIcon icon={faFileAlt} /> DOWNLOAD RESUME
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative'
              >
                <div className='absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl'></div>
                <img 
                  src={aboutPics} 
                  alt="About Victor" 
                  className='relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-32 px-6 md:px-12'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center max-w-3xl mx-auto mb-20'>
              <h2 className='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Selected Projects</h2>
              <p className='text-lg text-slate-600 dark:text-slate-400'>
                A collection of my recent work where design meets functionality.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                { img: projectOne, title: "Top Recipe Book", link: "https://top-recipe-book.vercel.app/" },
                { img: projectThree, title: "Eltroncs", link: "https://eltroncs.vercel.app/" },
                { img: projectFour, title: "Akar Estates", link: "https://akar-estates.vercel.app/" },
                { img: projectTwo, title: "Explore Nigeria", link: "https://explore-nigeria.vercel.app/" },
                { img: projectSun, title: "Sunrise Journal", link: "https://sunrise-journal.vercel.app/" },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className='group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10'
                >
                  <div className='relative h-64 overflow-hidden'>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8'>
                      <a 
                        href={project.link} 
                        target='_blank'
                        className='bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'
                      >
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                  <div className='p-8'>
                    <h3 className='text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300'>{project.title}</h3>
                    <div className='flex items-center justify-between'>
                      <div className='flex gap-4'>
                        <FontAwesomeIcon icon={faGithub} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" />
                        <FontAwesomeIcon icon={faBehanceSquare} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" />
                      </div>
                      <a href={project.link} target='_blank' className='text-blue-500 dark:text-[#48daf7] font-bold text-sm flex items-center gap-2'>
                        Live Demo <span className='group-hover:translate-x-1 transition-transform'>&#8599;</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='py-32 px-6 md:px-12 bg-slate-50 dark:bg-white/5'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-black mb-2 tracking-tight text-center'>Tech Stack & Capabilities</h2>
            <p className='text-center text-lg text-slate-600 dark:text-slate-400 mb-10'>Frontend engineering, product strategy, and global delivery from African roots.</p>
            
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4'>
              {[
                { icon: faReact, label: "React" },
                { icon: faNodeJs, label: "Node.js" },
                { icon: faCss, label: "Tailwind" },
                { icon: faJs, label: "JavaScript" },
                { icon: faCss, label: "CSS3" },
                { icon: faFigma, label: "Figma" },
                { icon: faCode, label: "Next.js" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className='p-8 flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#050e23] border border-slate-200 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300'
                >
                  {skill.icon ? (
                    <FontAwesomeIcon icon={skill.icon} className="text-4xl text-slate-700 dark:text-white" />
                  ) : (
                    <img src={skill.img} alt={skill.label} className='h-10 w-auto' />
                  )}
                  <span className='text-sm font-bold text-slate-500 dark:text-slate-400'>{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id='reviews' className='py-32 px-6 md:px-12'>
          <div className='max-w-7xl mx-auto'>
            <div className='mb-20'>
              <h2 className='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Product + Engineering Process</h2>
              <p className='text-lg text-slate-600 dark:text-slate-400'>A product-centric workflow for launching scalable software from African strategy to global market fit.</p>
            </div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                { num: "01", title: "Plan", text: "Understanding project requirements and breaking them into actionable tasks and milestones." },
                { num: "02", title: "Design", text: "Creating high-fidelity UI mockups and wireframes to visualize the user experience." },
                { num: "03", title: "Develop", text: "Writing clean, efficient, and scalable code using modern frameworks and best practices." },
                { num: "04", title: "Test", text: "Ensuring cross-browser compatibility, responsiveness, and bug-free functionality." },
                { num: "05", title: "Deploy", text: "Launching the application to production with optimized performance and security." },
                { num: "06", title: "Review", text: "Analyzing performance data and gathering feedback for continuous improvement." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className='relative group bg-white dark:bg-gradient-to-br dark:from-[#050e23] dark:to-[#061a47] p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg'
                >
                  <span className='text-6xl font-black text-blue-500/10 dark:text-blue-500/20 absolute bottom-6 right-6 transition-all duration-500 group-hover:scale-110'>{item.num}</span>
                  <h3 className='text-2xl font-bold mb-6 text-slate-900 dark:text-white'>{item.title}</h3>
                  <p className='text-slate-600 dark:text-slate-400 leading-relaxed relative z-10'>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking & Community */}
        <section id='speaking' className='py-32 px-6 md:px-12 bg-slate-50 dark:bg-white/5'>
          <div className='max-w-7xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-black mb-6 tracking-tight'>Speaking & Community Impact</h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 mb-12'>Sharing product insights at conferences, mentoring developers, and championing African tech innovation.</p>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='p-8 bg-white dark:bg-[#050e23] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm'>
                <h3 className='text-2xl font-bold mb-3'>Keynote & Talks</h3>
                <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>Delivered topical sessions on modern product engineering, design systems, and community-led growth.</p>
              </div>

              <div className='p-8 bg-white dark:bg-[#050e23] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm'>
                <h3 className='text-2xl font-bold mb-3'>Mentorship</h3>
                <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>Mentored junior engineers from Lagos to Nairobi through workshops and live coding sessions.</p>
              </div>

              <div className='p-8 bg-white dark:bg-[#050e23] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm'>
                <h3 className='text-2xl font-bold mb-3'>Product Focus</h3>
                <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>Helping teams build product-first experiences that scale internationally while rooted in African values.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id='contact' className='py-32 px-6 md:px-12 bg-slate-900 text-white'>
          <div className='max-w-7xl mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-black mb-8 italic tracking-tight'>Connect with me</h2>
            
            <div className='flex justify-center gap-6 mb-16'>
              {[
                { icon: faEnvelope, href: "mailto:nwosuuvictor@gmail.com" },
                { icon: faXTwitter, href: "https://twitter.com/only_one_victor" },
                { icon: faLinkedin, href: "https://www.linkedin.com/in/victor-nwosu/" },
                { icon: faInstagram, href: "https://www.instagram.com/nwosuuvictor" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className='w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300'
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
            
            <p className='text-slate-500 text-sm font-medium'>
              © {new Date().getFullYear()} Victor Nwosu.
            </p>
          </div>
        </footer>
      </main>

      <BackToTop />
    </div>
  );
}

export default App;