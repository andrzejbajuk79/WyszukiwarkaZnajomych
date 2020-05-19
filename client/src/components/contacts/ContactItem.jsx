import React, {useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import PropTypes from 'prop-types'

const ContactItem = ({contact}) => {
 const contactContext = useContext(ContactContext)
 const {deleteContact, setCurrent, clearCurrent} = contactContext
 const {name, id, email, phone, type} = contact

 const onDelete = () => {
  deleteContact(id)
  clearCurrent()
 }
 const onEdit = (contact) => {
  setCurrent(contact)
 }
 return (
  <div className="card bg-light">
   <h3 className="text-primary text-left">
    {name}{' '}
    <span
     style={{float: 'right'}}
     className={
      'badge ' + (type === 'proffesional' ? 'badge-success' : 'badge-primary')
     }
    >
     {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
   </h3>
   <ul className="list">
    {email && (
     <li>
      <i className="fas fa-envelope-open"></i> {email}
     </li>
    )}
    {phone && (
     <li>
      <i className="fas fa-phone"></i> {phone}
     </li>
    )}
   </ul>
   <p>
    <button onClick={() => setCurrent(contact)} className="btn btn-dark btn-sm">
     Edit
    </button>
    <button onClick={onDelete} className="btn btn-danger btn-sm">
     Delete
    </button>
   </p>
  </div>
 )
}

ContactItem.propTypes = {
 contact: PropTypes.object.isRequired,
}
export default ContactItem
