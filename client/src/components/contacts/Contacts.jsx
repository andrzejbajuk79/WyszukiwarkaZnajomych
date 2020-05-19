import React, {useContext, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
 const contactContext = useContext(ContactContext)
 const {contacts, filtered} = contactContext
 if (contacts.length === 0) {
  return 'Dodaj swoj pierwszy kontakt'
 }

 return (
  <Fragment>
   {contacts !== null ? (
    <TransitionGroup>
     {filtered !== null
      ? filtered.map((contact, index) => (
         <CSSTransition key={index} timeout={500} classNames="item">
          <ContactItem contact={contact} />
         </CSSTransition>
        ))
      : contacts.map((contact, index) => (
         <CSSTransition key={index} timeout={500} classNames="item">
          <ContactItem contact={contact} />
         </CSSTransition>
        ))}
    </TransitionGroup>
   ) : (
    // <Spinner />
    'loading ...'
   )}
  </Fragment>
 )
}
export default Contacts
