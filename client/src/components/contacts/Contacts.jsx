import React, {useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
 const contactContext = useContext(ContactContext)
 const {contacts} = contactContext
 console.log(contacts)

 return (
  <>
   {contacts.map((item, index) => (
    <ContactItem key={index} contact={item} />
   ))}
  </>
 )
}
export default Contacts
