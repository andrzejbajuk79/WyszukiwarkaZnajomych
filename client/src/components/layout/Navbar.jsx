import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {NavLink} from '../utils/NavLink'

const Navbar = ({title, icon}) => {
 const pageLinks = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/login', label: 'Login'},
  {to: '/register', label: 'Register', icon: 'ion-compose'},
 ]
 return (
  <div className="navbar bg-primary">
   <h1>
    <i className={icon} /> <span> - {title}</span>
   </h1>
   <ul>
    {pageLinks.map((page, index) => (
     <NavLink key={index} {...page} />
    ))}
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
