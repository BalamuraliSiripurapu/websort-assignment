import {Link} from 'react-router-dom'
import Popup from "reactjs-popup"
import { RiMenu3Fill } from "react-icons/ri"

import './index.css'

const backgroundColorList = ["header-background-1", "header-background-2", "header-background-3"]
const backgroundColor = backgroundColorList[Math.ceil(Math.random()*backgroundColorList.length-1)]

const Header = () => (
    <div className={`header-container ${backgroundColor}`}>
      <div className='nav-header'>
        <Link to="/">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750397635/Rectangle_3_tguqjy.png" 
            alt="website logo" 
            className='website-logo'
            position='bottom-right'
        />
        </Link>
    <Popup
      trigger = {       
          <button type="button" className="menu-button">
            <RiMenu3Fill className="menu-icon"/>
          </button>}
    position="bottom center"
    >
        <ul className='mobile-nav-menu'>
            <li className='mobile-nav-item'>
              <Link to="/aboutus"  className='mobile-nav-link'>
                About us
              </Link>
            </li>
            <li className='mobile-nav-item'>
              <Link to="/services" className='mobile-nav-link'>
                Services
              </Link>
            </li>
            <li className='mobile-nav-item'>
              <Link to="/projects" className='mobile-nav-link'>
                Projects
              </Link>
            </li>
            <li className='mobile-nav-item'>
              <Link to="/careers" className='mobile-nav-link'>
                Careers
              </Link>
              </li>
            <li className='mobile-nav-item'>
              <Link to="/contactus" className='mobile-nav-link'>
                Contact us
              </Link>
              </li>
        </ul>
    </Popup>
   
        <ul className='desktop-nav-menu'>
          <li>
            <Link to="/aboutus" className='desktop-nav-link'>
              About us
            </Link>
            </li>
          <li>
            <Link to="/services" className='desktop-nav-link'>
              Services
            </Link>
            </li>
          <li>
            <Link to="/projects" className='desktop-nav-link'>
              Projects
            </Link>
            </li>
          <li>
            <Link to="/careers" className='desktop-nav-link'>
              Careers
            </Link>
            </li>
          <li>
            <Link to="/contactus">
              <button type="button" className='nav-button'>
                Contact us
              </button>
            </Link>
          </li>
        </ul>
        </div>
    </div>    
)

export default Header