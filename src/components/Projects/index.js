import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import {v4 as uuidv4} from 'uuid'

import Header from '../Header';
import Footer from '../Footer';

import './projects.css'


const projects = [
    {
      projectId: uuidv4(),
      title: 'UI/UX Design',
      imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1750477439/Rectangle_179_nyn2np.png"
    },
    {
      projectId: uuidv4(),
      title: 'Web Development',
      imageUrl: 'https://res.cloudinary.com/dejfd8kle/image/upload/v1750477447/Rectangle_179_1_c0mxv3.png',
    },
    {
      projectId: uuidv4(),
      title: 'App Development',
      imageUrl: 'https://res.cloudinary.com/dejfd8kle/image/upload/v1750477454/Rectangle_179_2_tunyr3.png',
    },
  ];


const Projects = () => (
    <div className='projects-container'>
      <Header />
      <div className='projects-responsive-container'>
    <div className="carousel-wrapper">
      <h1 className="carousel-title">Our Project</h1>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="project-swiper"
      >
        {projects.map(project => (
          <SwiperSlide key={project.id} className="slide-card">
            <img src={project.imageUrl} alt={project.title} className='slide-card-img'/>
            <p className='slide-card-title'>{project.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    <Footer /> 
    </div>
)

export default Projects