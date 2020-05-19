import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
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
 // Load User
 const loadUser = async () => {
  // setAuthToken(localStorage.token)

  try {
   const res = await axios.get('/api/auth')

   dispatch({
    type: actions.USER_LOADED,
    payload: res.data,
   })
  } catch (err) {
   dispatch({type: actions.AUTH_ERROR})
  }
 }
 // register user
 const register = async (formData) => {
  const config = {
   headers: {
    'Content-Type': 'application/json',
   },
  }

  try {
   const res = await axios.post('/api/users', formData, config)

   dispatch({
    type: actions.REGISTER_SUCCESS,
    payload: res.data,
   })
   console.log('token', res.data)

   // loadUser()
  } catch (err) {
   dispatch({
    type: actions.REGISTER_FAIL,
    payload: err.response.data.msg,
   })
  }
 }

 // login user
 const login = () => {
  console.log('login')
 }
 // logout
 const logout = () => {
  console.log('logout')
 }

 // clear errors
 const clearErrors = () => dispatch({type: actions.CLEAR_ERRORS})
 return (
  <AuthContext.Provider
   value={{
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    user: state.user,
    error: state.error,
    register,
    login,
    clearErrors,
   }}
  >
   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthState
