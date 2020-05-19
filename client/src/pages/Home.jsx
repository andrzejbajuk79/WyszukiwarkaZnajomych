import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/auth/authContext'
import Contacts from '../components/contacts/Contacts'
import ContactForm from '../components/contacts/ContactForm'
import ContactFilter from '../components/contacts/ContactFilter'

const Home = (props) => {
 const authContext = useContext(AuthContext)

 const {loadUser} = authContext
 useEffect(() => {
  loadUser()
  //esLint-disable-next-line
 }, [loadUser])
 return (
  <div className="grid-2">
   <div>
    <ContactForm />
   </div>
   <div>
    <ContactFilter />
    <Contacts />
   </div>
  </div>
 )
}

export default Home
