import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {NavLink} from '../utils/NavLink'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({title, icon}) => {
 const authContext = useContext(AuthContext)
 const contactContext = useContext(ContactContext)
 const {isAuthenticated, logout, user, loadUser} = authContext
 const {clearContacts} = contactContext
 let pageLinks

 if (isAuthenticated) {
  pageLinks = [
   {to: '/', label: 'Home'},
   {to: '/about', label: 'About'},
   // {to: '/logout', label: 'Logout', icon: 'fas fa-sign-out-alt'},
  ]
 } else {
  pageLinks = [
   {to: '/login', label: 'Login'},
   {to: '/register', label: 'Register', icon: 'ion-compose'},
  ]
 }
 useEffect(() => {
  loadUser()
  // eslint-disable-next-line
 }, [])

 const onLogout = () => {
  console.log('test')

  logout()
  clearContacts()
 }

 return (
  <div className="navbar bg-primary">
   <h1>
    <i className={icon} /> <span> - {title}</span>
   </h1>
   <ul>
    {pageLinks.map((page, index) => (
     <NavLink key={index} {...page} />
    ))}
    {user && (
     <>
      <li>
       <a onClick={onLogout} href="#!">
        <i className="fas fa-sign-out-alt" />{' '}
        <span className="hide-sm">Logout</span>
       </a>
      </li>
      <li>Hello {user && user.name} </li>
     </>
    )}
   </ul>
  </div>
 )
}

Navbar.propTypes = {
 title: PropTypes.string.isRequired,
 icon: PropTypes.string,
}
Navbar.defaultProps = {
 title: 'Wyszukiwarka znajomych',
 icon: 'fas fa-id-card-alt',
}
export default Navbar
