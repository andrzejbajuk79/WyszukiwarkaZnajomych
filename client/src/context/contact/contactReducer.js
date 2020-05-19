import * as actions from '../types'

export default (state, action) => {
 const {type, payload} = action
 switch (type) {
  case actions.ADD_CONTACT:
   return {...state, contacts: [...state.contacts, payload]}
  case actions.DELETE_CONTACT:
   return {
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== payload),
   }
  case actions.SET_CURRENT:
   return {...state, current: payload}
  case actions.CLEAR_CURRENT:
   return {...state, current: null}
  case actions.UPDATE_CONTACT:
   return {
    ...state,
    contacts: state.contacts.map((contact) => {
     return contact.id === payload.id ? payload : contact
    }),
   }

  case actions.FILTER_CONTACTS:
   return {
    ...state,
    filtered: state.contacts.filter((contact) => {
     const regex = new RegExp(`${payload}`, 'gi')
     if (contact.email) {
      return contact.name.match(regex) || contact.email.match(regex)
     } else {
      return contact.name.match(regex)
     }
    }),
   }
  case actions.CLEAR_FILTER:
   return {...state, filtered: null}
  default:
   return state
 }
}
