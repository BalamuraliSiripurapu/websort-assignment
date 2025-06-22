import {Link} from 'react-router-dom'

import './mobileheader.css'

const MobileNavbar= () => {
  return (
    <div className="mobile-navbar-container">
      <Link to="/">
       <div className="nav-item">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750587495/6f3d1573cbce9dba72875af18eb94727440e4c99_yshkkl.png" 
          alt="home" className='nav-icon'/>
        <span>Home</span>
       </div>
      </Link>
      <Link to="/services">
      <div className="nav-item">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750587395/Service_ajjmjs.png" 
          alt="services" className='nav-icon'/>
        <span>Services</span>
      </div>
      </Link>
      <Link to="projects">
      <div className="nav-item">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750587402/iMac_Settings_xvj6uw.png" 
          alt="project" className='nav-icon'/>
        <span>Project</span>
      </div>
      </Link>
      <Link to="careers">
      <div className="nav-item">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1750587409/Project_Management_qjuvs6.png" 
          alt="careers" className='nav-icon'/>
        <span>Careers</span>
      </div>
      </Link>
    </div>
  );
};

export default MobileNavbar