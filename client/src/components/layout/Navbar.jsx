import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title, icon}) => {
 return (
  <div className="navbar bg-primary">
   <h1>
    <i className={icon} /> <span> - {title}</span>
   </h1>
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
