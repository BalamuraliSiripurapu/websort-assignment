import './index.css'

const ServicesCard = props => {
    const {serviceDetails, index} = props
    const {imageUrl, name,description} = serviceDetails

    let serviceItemClassName = 'service-item'
    if (index%2 !== 0) {
        serviceItemClassName = 'service-item order-changed-service-item'
    }

    return (
        <li className={serviceItemClassName}>
            <img src={imageUrl} alt={name} className='service-image'/>
            <div className='service-item-details'>
               <h1 className='service-item-name'>{name}</h1>
               <p className='service-item-description'>{description}</p>
               <button type="button" className='know-more-btn'>Know More</button>
            </div>
            
        </li>
    )
}

export default ServicesCard