import React, {useReducer, useEffect} from 'react'
// import uuid from 'uuid/v4'
import {v4 as uuid} from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import * as actions from '../types'
import contactContext from './contactContext'

const ContactState = (props) => {
 const initialState = {
  contacts: [
   {
    id: 1,
    name: 'jil milli',
    phone: '111-222-333',
    type: 'personal',
    email: 'psss@sss.pl',
   },
   {id: 2, name: 'jil milli', phone: '111-222-333', type: 'proffesional'},
   {id: 3, name: 'jil milli', phone: '111-222-333', type: 'personal'},
  ],
 }

 const [state, dispatch] = useReducer(contactReducer, initialState)

 //add contact
 const addContact = (contact) => {
  contact.id = uuid()
  dispatch({type: actions.ADD_CONTACT, payload: contact})
 }

 //delete contact

 //set current contact

 //clear current contact

 //update contact

 //filter contact

 //clear fillter

 return (
  <ContactContext.Provider
   value={{
    contacts: state.contacts,
    addContact,
   }}
  >
   {props.children}
  </ContactContext.Provider>
 )
}

export default ContactState
