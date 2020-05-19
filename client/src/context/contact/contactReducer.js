import * as actions from '../types'

export default (state, action) => {
 const {type, payload} = action
 switch (type) {
  case actions.ADD_CONTACT:
   return {...state, contacts: [...state.contacts, payload]}

  default:
   return state
 }
}
