import React, {useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
 const contactContext = useContext(ContactContext)
 const {contacts, filtered} = contactContext
 if (contacts.length === 0) {
  return 'Dodaj swoj pierwszy kontakt'
 }

 return (
  <>
   {filtered !== null
    ? filtered.map((item, index) => <ContactItem key={index} contact={item} />)
    : contacts.map((item, index) => <ContactItem key={index} contact={item} />)}
  </>
 )
}
export default Contacts
