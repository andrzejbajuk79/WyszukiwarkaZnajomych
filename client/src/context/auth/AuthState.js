//esLint-disable-next-line
import React, {useReducer} from 'react'
import axios from 'axios'
import setAuthToken from '../../components/utils/setAuthToken'
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

 // Load User
 const loadUser = async () => {
  if (localStorage.token) {
   setAuthToken(localStorage.token)
  }
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
   loadUser()
  } catch (err) {
   dispatch({
    type: actions.REGISTER_FAIL,
    payload: err.response.data.msg,
   })
  }
 }

 // login user
 const login = async (formData) => {
  const config = {
   headers: {
    'Content-Type': 'application/json',
   },
  }
  try {
   const res = await axios.post('/api/auth', formData, config)
   dispatch({
    type: actions.LOGIN_SUCCESS,
    payload: res.data,
   })

   loadUser()
  } catch (err) {
   dispatch({
    type: actions.LOGIN_FAIL,
    payload: err.response.data.msg,
   })
  }
 }
 // logout
 const logout = () => dispatch({type: actions.LOGOUT})

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
    logout,
    clearErrors,
    loadUser,
   }}
  >
   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthState
