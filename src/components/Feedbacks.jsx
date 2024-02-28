import {motion} from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard=(
  {index,testimonial,name,designation,company,image}
)=>(
      <motion.div
        variants={fadeIn("","spring",index*0.5,0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className='text-white font-black text-[48px]'>"</p>
        
        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col pink-text-gradient'>
                    <p className='text-white font-medium text-[16px]'>
                      <span>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                      {designation} of {company}
                    </p>
                </div>
                <img 
                  src={image}
                  alt={`feedback-by-${name}`}
                  className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>

      </motion.div>
  )


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials</h2>
          </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial,index)=>(
            <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
          ))}
          
      </div>
      <div className='absolute xs:bottom-10 bottom-20 right-30 w-full flex justify-center items-center'>
                <a href='#contact'>
                
                  <div className='w-[35px] h-[75px] rounded-1xl border-4 border-[#915eff] flex justify-center items-start p-2 '>
                        
                      <motion.div 
                        animate={{
                          y:[0,24,0]
                        }}
                        transition={{
                          duration:1.5,
                          repeat:Infinity,
                          repeatType: 'loop'
                        }}
                      
                      
                      >

                        <button id="myBtn" title="Want to meet me" className={`${styles.heroSubText} bg-none`}>&#9733;</button>
                        </motion.div>
                  </div>
                </a>

              </div>
      
    </div>
    
  )
}

export default SectionWrapper(Feedbacks,"");