import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import {v4 as uuidv4} from 'uuid'

import Header from '../Header';
import MobileNavbar from '../MobileNavbar';

import './home.css'


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


const backgroundList = ["projects-background-1", "projects-background-2"]
const backgroundColor = backgroundList[Math.ceil(Math.random()*backgroundList.length-1)]


const Home = () => (
    <div className='home-container'>
      <Header />
      <div className={`home-responsive-container ${backgroundColor}`}>
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
    <MobileNavbar />
    </div>
    </div>
)

export default Home