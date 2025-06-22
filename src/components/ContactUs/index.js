import Header from '../Header'
import SubmitForm from '../SubmitForm'
import Footer from '../Footer'

import './contactus.css'

const ContactUs = () => {
    const renderBannerSection = () => (
        <div className='contact-us-banner-container'>
           <div className='banner-details'>
            <h1 className='contact-us-banner-heading'>Contact Us</h1>
            <p className='contact-us-banner-description'>
                Have a question, idea, or project in mind? We're here to help — get in touch with us today.
            </p>
          </div>
        </div>
    )

    const renderSupportFormSection = () => (
     <div className='contact-us-form-container'>
        <h1 className='contact-us-heading'>Need support or want to collaborate?</h1>
        <p className='contact-us-description '>Fill out the form and our team will get back to you shortly</p>
        <SubmitForm />
    </div>
    )

    const renderAddressSection = () => (
        <div className='contact-us-address-container'>
          <h1 className='address-text'>Address</h1>
          <div className='map-image-address-info-container'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750418308/websort_bangalore_-_Google_Maps_-_Google_Chrome_08-06-2025_21_54_26_3_hh57ru.png" 
                alt="Google map" 
                className='google-map-image'/>
            <div className='address-info-card'>
              <p className='address-info'>Based in Bangalore |
                <br />
                contact@websort.com
                <br/>
              +91-XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
    )

  

    return (
    <div className='contact-us-container'>
      <Header />
      <div className='contact-us-responsive-container'>
        {renderBannerSection()}
        <div className='contact-us-content-container'>
            {renderSupportFormSection()}
            {renderAddressSection()}
            
         </div>
      </div>
      <Footer />
    </div>
)
}
export default ContactUs