import {Link} from 'react-router-dom'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


import {v4 as uuidv4}  from 'uuid'

import { BiTagAlt } from "react-icons/bi"
import Header from '../Header'
import Footer from '../Footer'
import './aboutus.css'


const backgroundImagesList = [
    {id: uuidv4(),
    className:"about-background-image-1"}, 
    {id: uuidv4(),
    className:"about-background-image-2"}, 
    {id: uuidv4(),
    className:"about-background-image-3"},
     {id: uuidv4(),
    className:"about-background-image-4"}
]
    
const backgroundImage = backgroundImagesList[Math.ceil(Math.random()*backgroundImagesList.length-1)].className


const futureInnovationsList = [
    {
        id: uuidv4(),
        cardClassName: "ai-card",
        text: "AI and IoT-driven products"
    },
    {   id: uuidv4(),
        cardClassName: "sass-card",
        text: "Expanding globally with scalable SaaS tools"
    },
    {
        id: uuidv4(),
        cardClassName: "isn-card",
        text: "Creating a tech community hub for developers and entrepreneurs"
    },
]

const achievementsList = [
    {
        Id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750527561/Rectangle_163_k1tn3s.jpg",
        name:"Web Development" ,
    },
        {
        Id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750527565/Rectangle_202_wik0du.png",
        name:"App Development" ,
    },
        {
        Id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750527571/Rectangle_165_ci70dd.jpg",
        name:"Digital Marketing" ,
    },

]

const projectsList = [
        {
        id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750593298/Rectangle_151_2_eqw4oh.png",
        title:"App Development" ,
    },
        {
        id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750596435/Rectangle_179_5_q5la5u.png",
        title:"UI/UX Design" ,
    },
            {
        id: uuidv4(),
        imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1750593293/Rectangle_151_1_qdqvxk.png",
        title:"Web Development" ,
    },
]

const AboutUs = () => {
    const [activeCard, setActiveCard] = useState({activeTagId: futureInnovationsList[0].id, 
        activeFutureInnovation: futureInnovationsList[0]})
    const [activeAchievement, setActiveAchievement] = useState(achievementsList[0])
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")

  const onChangeName = event => setName(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)
  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeMessage = event => setMessage(event.target.value)

  const onSubmitQuestionForm = event => {
    event.preventDefault()
  }
  

    const renderDigitalIdeasSection = () => (
        <div className='digital-ideas-section'>
         <div className='digital-ideas-section'>
            <h1 className='digital-ideas-heading'>
                Digitizing Ideas with Clean Code & Modern Design
            </h1>
            <p className='digital-ideas-description'>
                At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. 
                Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
            </p>
            
            <div className='digital-ideas-buttons-container'>
              <Link to="/contactus">
                <button type="button" className='about-us-custom-button'>ContactUs</button>
              </Link>
              <button type="button" className='about-us-custom-button'>Know More</button>
            </div>
         </div>
         </div>
    )

    const renderAboutusSection = () => (
        <div className='about-us-section'>
            <h1 className='about-us-text'>About Us</h1>
            <div className='innovation-text-container'>
               <h1 className='innovation-heading'>
                    Where Innovation Meets Execution
               </h1>
               <div>
                 <p className='innovation-description'>
                    Websort builds websites, apps, and digital marketing solutions to help you grow online. 
                    Based in Bangalore, we focus on smart design, strong tech, and real results.
                    We specialize in web development, mobile app development, UI/UX design, 
                    and digital marketing—delivering responsive websites, high-performance Android/iOS apps, 
                    and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, 
                    social media marketing, and content creation, helping businesses grow and connect with their ideal audience.
                 </p>
                 <button type="button" className='about-us-custom-button'>Know More</button>
               </div>
            </div>
        </div>
    )


    const renderOurProjectSection = () => (
          <div className="our-project-section">
              <h1 className="our-project-section-heading">Our Project</h1>
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
                {projectsList.map(project => (
                  <SwiperSlide key={project.id} className="project-slide-card">
                    <img src={project.imageUrl} alt={project.title} className='slide-card-img'/>
                    <button type="button" className="project-button">{project.title}</button>
                    
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
    )
        
    const renderFutureInnovationSection = () => {
        const {activeFutureInnovation} = activeCard
        return (
        <div className='future-innovation-container'>
           <h1 className='future-innovation-heading'>Fueling the Future with Innovation</h1>
           <div className={`${activeFutureInnovation.cardClassName}`}>
           <div className="future-innovation-card">
              <h1 className='active-future-innovation-text'>{activeFutureInnovation.text} </h1>
           </div>
           </div>
           <div className='tag-icons-container'>
              {futureInnovationsList.map(each => (
                <button type="button" 
                    key={each.id} 
                    className='tag-button' 
                    onClick={() => {
                        setActiveCard({activeTagId: each.id, 
                            activeFutureInnovation:each})
                    }}>
                   <BiTagAlt className={activeCard["activeTagId"] === each.id ? "active-tag-icon tag-icon" : "tag-icon"}/>
                </button>
              ))}
           </div>
           <button type="button" className='about-us-custom-button'>Know More</button>
        </div>
    )
}

const renderSeeOurWorkSection = () => (
    <div className="see-our-work-section">
        <div className='see-our-work-container'>
            <h1 className='see-our-work-heading'>See Our Work in Web Design & Development</h1>
            <img 
              src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750523941/image_14_1_jizwym.png" 
              alt="web design development"
              className="see-our-work-mobile-image" />
            <p className='see-our-work-description'>
                We specialize in building responsive, user-friendly websites tailored to client needs. 
                Take a look at our recent projects to see how design and functionality come together.
            </p>
            <button type="button" className='about-us-custom-button'>Explore More</button>
        </div>
        <img 
            src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750523939/image_13_osbqze.png" 
            alt="web design development"
            className="see-our-work-desktop-image" />
    </div>
)

const renderWhyWeStandOutSection = () => (
        <div className="stand-out-section">
        <div className='stand-out-container'>
            <h1 className='stand-out-heading'>Why We Stand Out</h1>
            <img 
              src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750526105/Union_vprgix.png" 
              alt="why we stand out"
              className="stand-out-mobile-image" />
            <p className='stand-out-description'>
                At Websort, we don’t just build digital products — we build careers. By joining our team, 
                you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
            </p>
        </div>
        <img 
            src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750526105/Union_vprgix.png" 
            alt="why we stand out"
            className="stand-out-desktop-image" />
    </div>
)

const renderAchievementsSection = () => (
    <div className='achievements-container'>
        <h1 className='achievements-section-heading'>One of our proudest achievements.</h1>
        <p className='achievements-section-description'>
            A standout from our portfolio, this project exemplifies the quality, creativity, 
            and performance we bring to every solution. It's a true reflection of our commitment to excellence.
        </p>

        <div className='mobile-achievements-list'>
            <li className='achievement-item'>
                <img src={activeAchievement.imageUrl} alt={activeAchievement.name} className='achievement-image' />
                <h1 className='achievement-name'>{activeAchievement.name}</h1>
                <button type="button" className='achievement-button'>Explore More</button>
            </li>
             <div className='pagination-container'>   
            <button type="button" className='pagination-button'  onClick={() => {
                const index = achievementsList.findIndex(each => each.Id === activeAchievement.Id)
                console.log(index)
                if (index > 0) {
                    setActiveAchievement(achievementsList[index-1])
                }
            }
            }>
                <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750582338/Back_To_lhflhx.png"
                   alt="back" className='pagination-icon' />
            </button>
             <button type="button" className='pagination-button' onClick={() => {
                const index = achievementsList.findIndex(each => each.Id === activeAchievement.Id)
                console.log(index)
                if (index < achievementsList.length-1) {
                    setActiveAchievement(achievementsList[index+1])
                }
            }
            }>
                <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750582333/Next_Page_whr92r.png"
                   alt="next page" className='pagination-icon' />
            </button>
        </div>
        </div>

        <ul className='desktop-achievements-list'>
            {achievementsList.map(each => (
                <li key={each.Id} className='achievement-item'>
                    <img src={each.imageUrl} alt={each.name} className='achievement-image' />
                    <h1 className='achievement-name'>{each.name}</h1>
                    <button type="button" className='achievement-button'>Explore More</button>
                </li>
            ))}
        </ul>
       
    </div>
)


const renderQuestionsSubmitForm = () => (
    <div className='questions-form-section'>
        <h1 className='questions-form-heading'>Questions? We're here to answer them!</h1>
        <form className='questions-form-container' onSubmit={onSubmitQuestionForm}>
            <ul className='questions-input-list'>
            <li className='question-input-container'>
              <label htmlFor='Name' className='question-input-label'>Name</label>
              <input 
                type="text" 
                id="Name" 
                className='question-input'
                value={name}
                onChange={onChangeName}/>
            </li>
            <li className='question-input-container'>
              <label htmlFor='Email' className='question-input-label'>Email</label>
              <input 
                type="text"   
                id="Email" 
                className='question-input'
                value={email}
                onChange={onChangeEmail}/>
            </li>
            <li className='question-input-container'>
              <label htmlFor='Number' className='question-input-label'>Number</label>
              <input 
                type="number" 
                id="Number" 
                className='question-input'
                value={number}
                onChange={onChangeNumber}/>
            </li>
            <li className='question-input-container'>
              <label htmlFor='Message' className='question-input-label'>Message</label>
              <textarea 
                type="text" 
                id="Message" 
                className='question-message-input'
                value={message}
                onChange={onChangeMessage}/>
            </li>
            </ul>
            <button type="submit" className="question-submit-button">Submit</button>
         </form>
    </div>
)

const renderOpportunitiesAwaitYou = () => (
    <div className='oppertunity-awaits-you-section'>
        <h1 className='oppertunity-awaits-you-heading'>See what opportunities await you</h1>
        <button type="button" className='oppertunity-awaits-you-button'>Explore More</button>
    </div>
)


    return ( 
    <div className='about-us-container'>
      <Header />
      <div className={`about-us-responsive-container ${backgroundImage}`}>
         {renderDigitalIdeasSection()}
         {renderAboutusSection()}
         {renderOurProjectSection()}
      </div>
         {renderFutureInnovationSection()}
         {renderSeeOurWorkSection()}
         {renderWhyWeStandOutSection()}
         {renderAchievementsSection()}
         {renderQuestionsSubmitForm()}
         {renderOpportunitiesAwaitYou()}
      <Footer />
    </div>
)
}
export default AboutUs