import * as actions from '../types'

export default (state, action) => {
 const {type, payload} = action
 switch (type) {
  case actions.REGISTER_SUCCESS:
   localStorage.setItem('token', payload.token)
   return {...state, payload, isAuthenticated: true, loading: false}
  case actions.REGISTER_FAIL:
   localStorage.removeItem('token')
   return {
    ...state,
    toke: null,
    isAuthenticated: false,
    loading: false,
    user: null,
    error: payload,
   }
  case actions.CLEAR_ERRORS:
   return {...state, error: null}
  default:
   return state
 }
}
