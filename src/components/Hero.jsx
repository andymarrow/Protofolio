import {motion} from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  const paragraphs = [
    "Front-end & Backend Developer",
    "Full-Stack Developer",
    "3D Modeler",
    "Video Editor",
    "3D Compositor"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < paragraphs.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className='relative w-full 
    h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          
          
          </div>
          
          <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'M &nbsp;<span className='text-[#915eff]'>
                  Miheretab</span> 
                   
                 </h1>
                 <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                 I am a passionate  <motion.span
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01 }}
              className='text-[#915eff]'
            >
              {paragraphs[currentIndex]}
            </motion.span></p>
            </div>
      </div>

            <ComputersCanvas />
              <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                  <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                      <motion.div 
                        animate={{
                          y:[0,24,0]
                        }}
                        transition={{
                          duration:1.5,
                          repeat:Infinity,
                          repeatType: 'loop'
                        }}
                        className="w-3 h-3 rounded-full bg-secondary mb-1"
                      
                      />
                  </div>
                </a>

              </div>
     
    </section>
  )
}

export default Hero