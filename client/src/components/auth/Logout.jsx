import React, {useEffect, useContext} from 'react'

import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

export const Logout = (props) => {
 const authContext = useContext(AuthContext)
 const contactContext = useContext(ContactContext)
 const {logout} = authContext
 const {clearContacts} = contactContext

 useEffect(() => {
  logout()
  clearContacts()
  props.history.push('/login')
 }, [logout, clearContacts])
 return <div></div>
}
