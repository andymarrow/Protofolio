import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { Link } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ProjectCard=(
 { index,name,description,tags,image,source_code_link,Preview_link,Preview_link1}
)=>{

    return(
      <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                  <div className="relative w-full h-[230px]">
                      <img 
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                  </div>
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <div
                          onClick={()=>window.open(source_code_link,"_blank")}
                          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-20"
                     >
                          <img 
                              src={github}
                              alt="github"
                              className="w-1/2 h-1/2 object-contain"
                          
                          />
                      </div>
                      <div
                                onClick={() => window.open(Preview_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-20"
                              >
                                <img src={Link} alt="Link" className="w-1/2 h-1/2 object-contain" />
                      </div>
          {index === 0 && (
                      <div
                                  onClick={() => window.open(Preview_link1, "_blank")}
                                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-20"
                                >
                                  <img src={Link} alt="Link" className="w-1/2 h-1/2 object-contain" />
                                </div>
                              )}
                      </div>
                  <div className="mt-5">
                      <h3 className="text-white font-bold text-[24px]">{name}</h3>
                      <p className="mt-2 text-secondary tex-[14px]">{description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                   { tags.map((tag)=>(
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                          #{`${tag.name}`}
                    </p>
                   ))}
                  </div>
            </Tilt>
      </motion.div>
    )
}






const Works = () =>  {
  const isMobile = window.innerWidth <= 768; // Check if the device is mobile
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Display 1 slide on mobile, 3 slides on larger devices
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint value as per your needs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </motion.p>
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works , "")