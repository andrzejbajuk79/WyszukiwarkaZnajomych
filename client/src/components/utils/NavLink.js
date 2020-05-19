import React from 'react'
import {Link} from 'react-router-dom'

export const NavLink = ({to, icon, label}) => (
 <li className="nav-item">
  <Link to={to} className="nav-link">
   {icon && <span className={icon} />}
   {label}
  </Link>
 </li>
)
