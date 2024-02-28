import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard=({experience})=>{
  return(
            <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#1d1836', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #232631' }}
                  date={experience.date} 
                  iconStyle={{ background: experience.iconBg}}
                  icon={
                    <div>
                        <img
                            src={experience.icon}
                            alt={experience.company_name}
                        />
                    </div>
                  }
                               >

                <div>
                      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
                      <ul className="mt-5 list-disc ml-5 space-y-2">
                          {experience.points.map((point,index)=>(
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                  {point}
                            </li>
                          ))}
                      </ul>
                </div>
                  
              </VerticalTimelineElement>
    )
}






const Experience = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What i did So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>
        <div className="mt-20 flex flec-col">
          <VerticalTimeline>
                {experiences.map((experience,index)=>(
                  <ExperienceCard key={index}
                   experience={experience} />
                ))}
          </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")