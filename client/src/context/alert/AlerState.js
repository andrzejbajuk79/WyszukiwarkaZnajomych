import React, {useReducer, useEffect} from 'react'

import {v4 as uuid} from 'uuid'
import alertReducer from './AlertReducer'

import * as actions from '../types'
import AlertContext from './AlertContext'

const AlertState = (props) => {
 const initialState = []
 const [state, dispatch] = useReducer(alertReducer, initialState)
 // setAlert
 const setAlert = (msg, type, timeout = 2000) => {
  const id = uuid()
  dispatch({type: actions.SET_ALERT, payload: {msg, type, id}})
  setTimeout(() => {
   dispatch({type: actions.REMOVE_ALERT, payload: id})
  }, timeout)
 }

 // remove alert

 return (
  <AlertContext.Provider
   value={{
    alerts: state,
    setAlert,
   }}
  >
   {props.children}
  </AlertContext.Provider>
 )
}

export default AlertState
