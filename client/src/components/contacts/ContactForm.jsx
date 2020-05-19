import React, {useState, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
const itinitialForm = {
 name: '',
 email: '',
 phone: '',
 type: 'personal',
}

const ContactForm = () => {
 const contactContext = useContext(ContactContext)
 const [contact, setContact] = useState(itinitialForm)
 const {name, email, phone, type} = contact

 //change event
 const onChange = (e) => {
  setContact({...contact, [e.target.name]: e.target.value})
 }
 //submit event
 const onSubmit = (e) => {
  e.preventDefault()
  contactContext.addContact(contact)
  setContact(itinitialForm)
 }
 return (
  <form onSubmit={onSubmit}>
   <h2 className="text-primary">Add contact </h2>
   <input
    type="text"
    placeholder="name"
    name="name"
    value={name}
    onChange={onChange}
   />
   <input
    type="email"
    placeholder="Email"
    name="email"
    value={email}
    onChange={onChange}
   />
   <input
    type="text"
    placeholder="Phone"
    name="phone"
    value={phone}
    onChange={onChange}
   />
   <h5>Contact Type</h5>
   <input
    type="radio"
    name="type"
    value="personal"
    checked={type === 'personal'}
    onChange={onChange}
   />
   Personall{' '}
   <input
    type="radio"
    name="type"
    value="professional"
    checked={type === 'professional'}
    onChange={onChange}
   />
   Professional{' '}
   <div>
    <input
     type="submit"
     value="ADD CONTACT"
     className="btn btn-primary btn-block"
    />
   </div>
  </form>
 )
}

export default ContactForm
