import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef= useRef();
  const [form,setForm] =useState({
    name:'',
    email:'',
    message:''
  });

  const [ loading, setLoading]= useState(false);
  const handlechange=(e)=>{
      const {name,value} =e.target;
      setForm({ ...form,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

      emailjs.send(
        'service_pfalxdg',
      'template_1gf2di4',
          {
            from_name: form.name,
            to_name:'Miheretab',
            from_email: form.email,
            to_email: 'miheretabsamson90@gmail.com',
            message:form.message

          },
          'lWHM5CfXyjJ7yzSUU'
      )
      .then(()=>{
          
          setForm({
            name:'',
            email:'',
            message:'',
          })
          setLoading(false);
         toast.success('Thank You!! I will get back to you soon');
          
      },(error)=>{
        setLoading(false)

        console.log(error);
        toast.error('This is an error!');
        
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left","tween",0.2,1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
              <p className={styles.sectionSubText}>Contact Me</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
              <form
                  ref={formRef}
                  onSubmit={handlesubmit}
                  className='mt-12 flex flex-col gap-8'
              >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name &nbsp; :</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handlechange}
                           placeholder="what's your name?"
                           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        
                        
                        />
                    
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email &nbsp; :</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handlechange}
                           placeholder="what's your email?"
                           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        
                        
                        />
                    
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message &nbsp; :</span>
                        <textarea 
                            rows='7'
                            name="message"
                            value={form.message}
                            onChange={handlechange}
                           placeholder="Type here am listening?"
                           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
                        
                        
                        />
                    
                    </label>
                    <div className='flex justify-center'>
                          <button
                            type="submit"
                            className="bg-teriary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                          >
                            {loading ? 'Sending...' : 'Send'}
                          </button>
                          
                    </div>
              </form>
              
        </motion.div>
        <motion.div
          variants={slideIn("right","tween",0.2,1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
            <EarthCanvas />
        </motion.div>
        <Toaster position="bottom-right" reverseOrder={false}/>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")