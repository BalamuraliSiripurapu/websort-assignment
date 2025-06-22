import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'

import './App.css';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/services" element={<Services />} />
       <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/careers" element={<Careers />} />
      <Route exact path="/contactus" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
)

export default App;
