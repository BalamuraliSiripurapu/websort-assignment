import { useState } from 'react'
import './index.css'

const SubmitForm = () => {
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const onChangeFirstName = event => setFirstName(event.target.value)
  const onChangeSecondName = event => setSecondName(event.target.value)
  const onChangeEmailAddress = event => setEmailAddress(event.target.value)
  const onChangePhone = event => setPhone(event.target.value)
  const onChangeCompany = event => setCompany(event.target.value)
  const onChangeMessage = event => setMessage(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
  }
  
  return (
        <form className='form-container' onSubmit={onSubmitForm}>
            <ul className='input-list'>
            <li className='input-container'>
              <label htmlFor='firstName' className='input-label'>First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className='user-input'
                value={firstName}
                onChange={onChangeFirstName}/>
            </li>
            <li className='input-container'>
              <label htmlFor='secondName' className='input-label'>Second Name</label>
              <input 
                type="text"  
                id="secondName" 
                className='user-input'
                value={secondName}
                onChange={onChangeSecondName}/>
            </li>
            <li className='input-container'>
              <label htmlFor='emailAddress' className='input-label'>Email Address</label>
              <input 
                type="text" 
                id="emailAddress" 
                className='user-input'
                value={emailAddress}
                onChange={onChangeEmailAddress}/>
            </li>
            <li className='input-container'>
              <label htmlFor='phone' className='input-label'>Phone</label>
              <input 
                type="number" 
                id="phone" 
                className='user-input'
                value={phone}
                onChange={onChangePhone}/>
            </li>
            <li className='input-container'>
              <label htmlFor='company' className='input-label'>Company</label>
              <input 
                type="text"
                id="company" 
                className='user-input'
                value={company}
                onChange={onChangeCompany}/>
            </li>
            <li className='input-container'>
              <label htmlFor='message' className='input-label'>Message</label>
              <input 
                type="text" 
                id="message" 
                className='message-input'
                value={message}
                onChange={onChangeMessage}/>
            </li>
            </ul>
            <button type="submit" className="submit-button">Submit</button>
         </form>
)
}
export default SubmitForm