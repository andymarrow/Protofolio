import React, { useState, useEffect } from 'react';
import {Tilt} from 'react-tilt'
import { motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

import { TypeAnimation } from 'react-type-animation';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
     
   >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          
          I am a professional <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEb DEVELOPER 😊',
        
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'VIDEO EDITOR 😎',
        1000,
        'FULL-STACK-DEVELOPER 🚀',
        1000,
        '3D COMPOSITOR 🤖',
        1000,
        '3D MODELEOR 🌟 ',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{color : 'purple',fontSize: '1em'}}
      repeat={Infinity}
    />  <br/>
    
    {!isMobile && (
          <>
     <div className="flex items-center">
    based in Ethiopia, specializing in 3D website development.  I am also passionate about character modeling 👽 , compositing,and animation, which I do using Blender and Spline.<br/><br/> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png" alt="Alien" width="35" height="35" className='mb-6' />  </div>
    <div className="flex items-center">I have a strong passion for creating visually stunning websites with interactive 3D elements. Additionally, I excel in VFX effects and creating stunning visuals for videos.<br/><br/> <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Bomb.png" alt="Bomb" width="35" height="35" className='mb-6' /></div>
    <div className="flex items-center">I am proficient in video editing, primarily utilizing Adobe After Effects for my projects. This is where I bring my imagination to life and interact with my creations through the screen. I am always proud at the end of the day when I finish my projects and get to fully experience them.<br/><br/><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png" alt="Cowboy Hat Face" width="35" height="35" className='mb-6'  /></div>

    <div className="flex items-center">With expertise in UI design, I craft captivating user interfaces that enhance the user experience. I am proficient in tools such as Figma, Framer, and Dora, which enable me to bring my designs to life.<br/><br/><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png" alt="Disguised Face" width="35" height="35" className='mb-6'  /></div>

    <div className="flex items-center"> My portfolio showcases a diverse range of projects that highlight my skills and creativity. I am dedicated to delivering high-quality work and continuously pushing the boundaries of web development, design, and editing, as well as expanding my skills in the world of 3D.<br/><br/><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png" alt="Face with Monocle" width="35" height="35" className='mb-6'  /></div>

    <div className="flex items-center">  I am excited to collaborate on new projects and contribute my expertise to create engaging and immersive digital experiences.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png" alt="Grinning Face with Big Eyes" width="35" height="35" className='mb-6'  /></div>
    </>
      ) }
     </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};
export default SectionWrapper(About,"about") 