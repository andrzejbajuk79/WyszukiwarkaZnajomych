import React, {useState} from 'react'

export const Login = () => {
 const [user, setUser] = useState({
  email: '',
  password: '',
 })
 const {name, email, password, password2} = user

 const onChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value})
 }
 const onSubmit = (e) => {
  e.preventDefault()
  console.log('register', user)
 }
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