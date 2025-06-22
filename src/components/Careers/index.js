import Header from '../Header'
import SubmitForm from '../SubmitForm'
import Footer from '../Footer'

import './careers.css'

const Careers = () => {
  const bannerDescription = `
        At Websort, we bring digital ideas to life through expert web and app development, 
        digital marketing, and UI/UX design. Based in Bangalore, 
        we build responsive websites and mobile apps, enhance online visibility with SEO, 
        PPC, and social media, and design user-friendly interfaces. 
        Choose Websort for innovative, tailored digital solutions.
  `
    const renderBannerSection = () => (
        <div className='careers-banner-container'>
           <div className='banner-details-container'>
            <div className='banner-text-container'>
              <h1 className='banner-heading'>
                Talent wins games, but teamwork and intelligence win championships.
              </h1>
              <p className='desktop-banner-description'>
                  {bannerDescription}
              </p>
            </div>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750435454/image_24_1_xzxv08.png"
              alt="careers"
              className='careers-image' />
            <p className='mobile-banner-description'>
                {bannerDescription}
            </p>
          </div>
        </div>
    )

    const renderInternshipSection = () => (
      <div className='internships-container'>
        <h1 className='internships-heading'>Internship Opportunities at Websort</h1>
        <p className='internships-description'>Internship Opportunities at Websort</p>
        <ul className='internships-list'>
          <li className='internship-card'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750437259/image_29_h8yddj.png"
               alt="marketing"
               className='internship-image' />
            <p className='internship-name'>Marketing</p>
          </li>
          <li className='internship-card'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750437266/image_30_vvfafe.png"
               alt="app development"
               className='internship-image' />
            <p className='internship-name'>App Development</p>
          </li>
          <li className='internship-card'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750437272/image_1_a5l2nu.png"
               alt="web development"
               className='internship-image' />
            <p className='internship-name'>Web Development</p>
          </li>
          <li className='internship-card'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750437278/image_31_mkepcu.png"
               alt="UI UX"
               className='internship-image' />
            <p className='internship-name'>UI UX</p>
          </li>
        </ul>
      </div>
    )

    const renderSupportFormSection = () => (
     <div className='careers-form-container'>
        <h1 className='form-heading'>Fill out the form and our team will get back to you shortly</h1>
        <SubmitForm />
    </div>
    )

  

    return (
    <div className='careers-container'>
      <Header />
      <div className='careers-responsive-container'>
        {renderBannerSection()}
        {renderInternshipSection()}
        {renderSupportFormSection()}
        <Footer />

      </div>
    </div>
)
}
export default Careers