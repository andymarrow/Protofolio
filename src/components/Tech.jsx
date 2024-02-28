import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { TypeAnimation } from 'react-type-animation';


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology)=>(
          <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon}/>
              

          </div>
        ))}
        <div >
                 
                                    <span className="text-[18px] font-serif">I am well equiped and worked projects with the technologies like </span>
                                    
                                        <p className="justify-center items-center ml-9">
                                                      On The Frontend  &nbsp;&nbsp; <TypeAnimation
                                            sequence={[
                                              // Same substring at the start will only be typed out once, initially
                                              'HTML 5',
                                              
                                              1000, // wait 1s before replacing "Mice" with "Hamsters"
                                              'CSS 3',
                                              1000,
                                              'JavaScript',
                                              1000,
                                              'TypeScript',
                                              1000,
                                              'React JS ',
                                              1000,
                                              'Tailwind CSS',
                                              1000,
                                              'Next Js',
                                              1000,
                                              'Three JS ',
                                              1000,
                                              'shadcn ui ',
                                              1000,
                                              'bootstrap 5',
                                              1000,  
                                              'semantic ui',
                                              1000,
                                            
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{color : 'purple',fontSize: '2em', fontFamily: 'monospace'}}
                                            
                                            repeat={Infinity}
                                          />

                                       </p>
                                      <p className="justify-center items-center ml-9">On The Backend  &nbsp;&nbsp;
                                                  <TypeAnimation
                                              sequence={[
                                                'Node JS',
                                                1000,
                                                'MongoDB',
                                                1000,
                                                'Express Js',
                                                1000,
                                                'My Sql',
                                                1000,
                                                'Sql',
                                                1000,
                                              
                                              
                                                
                                              
                                              ]}
                                              wrapper="span"
                                              speed={50}
                                              style={{color : 'purple',fontSize: '2em'}}
                                              repeat={Infinity}
                                            />

                                     </p>
                              
                                     <p className="justify-center items-center ml-9">On the 3D world &nbsp;&nbsp;

                                            <TypeAnimation
                                                  sequence={[

                                                    'Three JS ',
                                                    1000,
                                                    'spline',
                                                    1000,
                                                    'Dora',
                                                    1000,
                                                    'Framer',
                                                    1000,
                                                    'Blender',
                                                    1000,
                                                  ]}
                                                  wrapper="span"
                                                  speed={50}
                                                  style={{color : 'purple',fontSize: '2em'}}
                                                  repeat={Infinity}
                                                />

                                     </p>
                                     <p className="justify-center items-center ml-9">On the Ui/Ux design &nbsp;&nbsp;

                                              <TypeAnimation
                                                    sequence={[
                                                      'spline',
                                                      1000,
                                                      'Dora',
                                                      1000,
                                                      'Framer',
                                                      1000,
                                                    ]}
                                                    wrapper="span"
                                                    speed={50}
                                                    style={{color : 'purple',fontSize: '2em'}}
                                                    repeat={Infinity}
                                                  />
                                    </p>
        </div>
    </div>
  )
}

export default SectionWrapper(Tech,"");