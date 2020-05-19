import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({title, icon}) => {
 return (
  <div className="navbar bg-primary">
   <h1>
    <i className={icon} /> <span> - {title}</span>
   </h1>
   <ul>
    <li>
     <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/about">Home</Link>
    </li>
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
