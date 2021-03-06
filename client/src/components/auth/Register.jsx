import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/authContext'
import {Redirect} from 'react-router-dom'

const Register = (props) => {
 const authContext = useContext(AuthContext)
 const alertContext = useContext(AlertContext)

 const {register, error, clearErrors, isAuthenticated} = authContext
 const {setAlert} = alertContext
 const [user, setUser] = useState({
  name: '',
  email: '',
  password: '',
  password2: '',
 })

 const {name, email, password, password2} = user

 const onChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value})
 }
 const onSubmit = (e) => {
  e.preventDefault()
  if (name === '' || email === '' || password === '') {
   setAlert('  Uzupelnij brakujace pole', 'danger')
  } else if (password !== password2) {
   setAlert('  Hasla nie pasuja do siebie', 'danger')
  } else {
   register({name, email, password})
  }
 }
 useEffect(() => {
  if (isAuthenticated) {
   props.history.push('/')
  }
  if (error === 'User already exists') {
   setAlert(error, 'danger')
   clearErrors()
  }
 }, [error, isAuthenticated])
 return (
  <div className="form-conatainer">
   <h1>
    Account <span className="text-primary"> Register</span>
   </h1>
   <form onSubmit={onSubmit}>
    <div className="form-group">
     <label htmlFor="name">Name</label>
     <input type="text" value={name} name="name" onChange={onChange} />
    </div>
    <div className="form-group">
     <label htmlFor="email">Email</label>
     <input
      // required
      type="email"
      value={email}
      name="email"
      onChange={onChange}
     />
    </div>
    <div className="form-group">
     <label htmlFor="password">Password</label>
     <input
      type="password"
      value={password}
      name="password"
      onChange={onChange}
      minLength="5"
      required
     />
    </div>
    <div className="form-group">
     <label htmlFor="password2">Confirm password</label>
     <input
      type="password"
      value={password2}
      name="password2"
      onChange={onChange}
      minLength="5"
      required
     />
    </div>
    <input
     type="submit"
     value="Register"
     className="btn btn-primary btn-block"
    />
   </form>
  </div>
 )
}

export default Register
