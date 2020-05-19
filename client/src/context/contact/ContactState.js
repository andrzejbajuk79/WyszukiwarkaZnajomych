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
    name: 'walesa',
    phone: '111-222-333',
    type: 'personal',
    email: 'psss@sss.pl',
   },
   {
    id: 2,
    name: 'kazik',
    phone: '111-222-333',
    type: 'professional',
   },
   {
    id: 3,
    name: 'milik',
    phone: '111-222-333',
    type: 'personal',
    email: 'psss@sss.pl',
   },
  ],
  current: null,
  filtered: null,
 }

 const [state, dispatch] = useReducer(contactReducer, initialState)

 //add contact
 const addContact = (contact) => {
  contact.id = uuid()
  dispatch({type: actions.ADD_CONTACT, payload: contact})
 }

 //delete contact
 const deleteContact = (id) => {
  dispatch({type: actions.DELETE_CONTACT, payload: id})
 }

 //set current contact
 const setCurrent = (contact) => {
  dispatch({type: actions.SET_CURRENT, payload: contact})
 }
 //clear current contact
 const clearCurrent = () => {
  dispatch({type: actions.CLEAR_CURRENT})
 }
 //update contact
 const updateContact = (contact) => {
  dispatch({type: actions.UPDATE_CONTACT, payload: contact})
 }
 //filter contact
 const filterContacts = (text) => {
  dispatch({type: actions.FILTER_CONTACTS, payload: text})
 }

 //clear fillter
 const clearFilter = () => {
  dispatch({type: actions.CLEAR_FILTER})
 }
 return (
  <ContactContext.Provider
   value={{
    contacts: state.contacts,
    addContact,
    deleteContact,
    current: state.current,
    filtered: state.filtered,
    setCurrent,
    clearCurrent,
    updateContact,
    filterContacts,
    clearFilter,
   }}
  >
   {props.children}
  </ContactContext.Provider>
 )
}

export default ContactState
