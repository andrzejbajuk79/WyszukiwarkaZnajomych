import React, {useContext, useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
 const contactContext = useContext(ContactContext)
 const text = useRef('')
 const {filterContacts, clearFilter, filtered} = contactContext
 const onChange = (e) => {
  if (text.current.value !== '') {
   filterContacts(e.target.value)
  } else {
   clearFilter()
  }
 }
 useEffect(() => {
  if (filtered === null) {
   text.current.value = ''
  }
 }, [filtered])

 return (
  <form>
   <input
    ref={text}
    placeholder="Filter Contacts.."
    onChange={onChange}
    type="text"
   />
  </form>
 )
}

export default ContactFilter
