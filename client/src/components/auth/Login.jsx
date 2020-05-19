import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/authContext'

export const Login = (props) => {
 const authContext = useContext(AuthContext)
 const alertContext = useContext(AlertContext)

 const {login, error, clearErrors, isAuthenticated} = authContext
 const {setAlert} = alertContext

 const [user, setUser] = useState({
  email: '',
  password: '',
 })
 const {email, password} = user

 //change vaLUES
 const onChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value})
 }

 //submit form
 const onSubmit = (e) => {
  e.preventDefault()
  if (!email === '' || password === '') {
   setAlert('prosze wypelnic pola', 'danger')
  }
  login({email, password})
 }

 //effect
 useEffect(() => {
  if (isAuthenticated) {
   props.history.push('/')
  }
  if (error === 'Invalid Credentials') {
   setAlert(error, 'danger')
   clearErrors()
  }
 }, [error, isAuthenticated])
 return (
  <div className="form-conatainer">
   <h1>
    Account <span className="text-primary"> Login</span>
   </h1>
   <form onSubmit={onSubmit}>
    <div className="form-group">
     <label htmlFor="email">Email</label>
     <input type="email" value={email} name="email" onChange={onChange} />
    </div>
    <div className="form-group">
     <label htmlFor="password">Password</label>
     <input
      type="password"
      value={password}
      name="password"
      onChange={onChange}
     />
    </div>

    <input type="submit" value="Login" className="btn btn-primary btn-block" />
   </form>
  </div>
 )
}

export default Login
