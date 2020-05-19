import React, {useReducer, useEffect} from 'react'

import AuthContext from './authContext'
import authReducer from './authReducer'
import * as actions from '../types'

const AuthState = (props) => {
 const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null,
  user: null,
 }
 const [state, dispatch] = useReducer(authReducer, initialState)
 // load user

 // register user

 // login user

 // logout

 // clear errors
 return (
  <AuthContext.Provider
   value={{
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    user: state.user,
    error: state.error,
   }}
  >
   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthState
