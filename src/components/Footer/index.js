import { IoIosCall } from "react-icons/io"
import { MdOutlineLocalPostOffice } from "react-icons/md"

import './index.css'

const Footer = () => (
    <>
        <div className='footer-container'>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750425044/Rectangle_3_1_xdh1bt.png" 
                alt="website logo" 
                className='website-logo' />
            <div className="contact-info-card">
              <div className='company-intersets-cards'>
              <ul className='company-intersets-container'>
               <li className='company-intersets'>Web Development |</li>
                <li className='company-intersets'>App Development |</li> 
                <li className='company-intersets'>UI/UX Design |</li>
                <li className='company-intersets'>Digital Marketing</li>         
              </ul>
              <div className="contact-us-sm-icons-container">
              <ul className='company-intersets-container'>
               <li className='company-intersets'>Based in Bangalore |</li>
                <li className='icon-text-container'>
                 <IoIosCall className='contact-info-icon'/>
                 <p className='company-intersets'> contact@websort.com |</p> 
                </li>
                <li className='icon-text-container'>
                  <MdOutlineLocalPostOffice className='contact-info-icon' />
                  <p className='company-intersets'>+91-XXXXXXXXXX |</p>
                </li>        
              </ul>
              <div className="social-media-icons-container">
               <button type="button" className='sm-icon-button'>
                  <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750425029/icon__google_icon__acjdwl.png" 
                  alt="google" 
                  className='social-media-icon' />
                </button>
               <button type="button" className='sm-icon-button'>
                  <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750425020/icon__instagram_icon__v9n2pn.png" 
                    alt="instagram" 
                    className='social-media-icon' />
                </button>
                <button type="button" className='sm-icon-button'>
                  <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750425037/icon__facebook_icon__jzbtcd.png" alt="facebook" className='social-media-icon' />
               </button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='rights-note-container'>
            <h1 className='rights-note'>© 2025 Websort. All rights reserved.</h1>
      </div>
    </>
    )

export default Footer