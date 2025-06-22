import Header from '../Header'
import Footer from '../Footer'
import ServicesCard from '../ServiceCard'
import './services.css'

const servicesList = [{
    id: 1,
    imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1750477439/Rectangle_179_nyn2np.png",
    name: "UI/UX Design",
    description: `We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. 
    From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.`
},
{
    id: 2,
    imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1750477447/Rectangle_179_1_c0mxv3.png",
    name: "Web Development",
    description: `Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. 
    Improved website traffic and engagement through targeted campaigns and regular performance tracking.`
},
{
    id: 3,
    imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1750477454/Rectangle_179_2_tunyr3.png",
    name: "App Development",
    description: `Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. 
    Designed with a clean UI and smooth navigation to ensure a seamless user experience.`
},
{
    id: 4,
    imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1750477460/Rectangle_179_3_u3jzgt.png",
    name: "Digital Marketing",
    description: `Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. 
    Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.`
},
]

const Services = () => (
    <div className='services-container'>
      <Header />
      <div className='services-responsive-container'>
        <h1 className='services-heading'>Our Services</h1>
          <ul className='services-list'>
            {servicesList.map((each, index) => (
                <ServicesCard serviceDetails={each} key={each.id} index={index} />
            ))}
          </ul>
      </div>
      <Footer />
    </div>

)

export default Services