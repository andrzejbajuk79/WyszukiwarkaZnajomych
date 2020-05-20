import React, {useReducer, useEffect} from 'react'
// import uuid from 'uuid/v4'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import * as actions from '../types'

const ContactState = (props) => {
 const initialState = {
  contacts: null,
  current: null,
  filtered: null,
  error: null,
 }
 const [state, dispatch] = useReducer(contactReducer, initialState)
 const config = {
  headers: {
   'Content-Type': 'application/json',
  },
 }
 //get contacts from database
 const getContacts = async () => {
  try {
   const res = await axios.get('/api/contacts')
   dispatch({type: actions.GET_CONTACTS, payload: res.data})
  } catch (error) {
   dispatch({type: actions.CONTACT_ERROR, payload: error.response.msg})
  }
 }

 //add contact
 const addContact = async (contact) => {
  try {
   const res = await axios.post('/api/contacts', contact, config)
   // dispatch({type: actions.ADD_CONTACT, payload: contact})
   dispatch({type: actions.ADD_CONTACT, payload: res.data})
  } catch (error) {
   dispatch({type: actions.CONTACT_ERROR, payload: error.response.msg})
  }
 }
 //update contact
 const updateContact = async (contact) => {
  try {
   const res = await axios.put(`/api/contacts/${contact._id}`, contact, config)
   // dispatch({type: actions.ADD_CONTACT, payload: contact})
   dispatch({type: actions.UPDATE_CONTACT, payload: res.data})
  } catch (error) {
   dispatch({type: actions.CONTACT_ERROR, payload: error.response.msg})
  }
 }
 // clear contacts
 const clearContacts = () => {
  dispatch({type: actions.CLEAR_CONTACTS})
 }
 ti
 //delete contact
 const deleteContact = async (id) => {
  try {
   const res = await axios.delete(`/api/contacts/${id}`)
   dispatch({type: actions.DELETE_CONTACT, payload: id})
  } catch (error) {
   dispatch({type: actions.CONTACT_ERROR, payload: error.response.msg})
  }
 }

 //set current contact
 const setCurrent = (contact) => {
  dispatch({type: actions.SET_CURRENT, payload: contact})
 }
 //clear current contact
 const clearCurrent = () => {
  dispatch({type: actions.CLEAR_CURRENT})
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
    current: state.current,
    filtered: state.filtered,
    error: state.error,
    addContact,
    deleteContact,
    setCurrent,
    clearCurrent,
    updateContact,
    filterContacts,
    clearFilter,
    getContacts,
    clearContacts,
   }}
  >
   {props.children}
  </ContactContext.Provider>
 )
}

export default ContactState
