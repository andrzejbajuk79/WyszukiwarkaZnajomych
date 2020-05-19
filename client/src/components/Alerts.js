import React, {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const Alerts = () => {
 const alertContext = useContext(AlertContext)
 console.log(alert.type)

 return (
  alertContext.alerts.length > 0 &&
  alertContext.alerts.map((alert, index) => (
   <div key={index} className={`alert alert-${alert.type}`}>
    <i className="fas fa-info-circle"></i>
    {alert.msg}
   </div>
  ))
 )
}
export default Alerts
