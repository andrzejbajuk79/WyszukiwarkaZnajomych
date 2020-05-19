import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Routes from './routes'
import AlertState from './context/alert/AlerState'
import Alerts from './components/Alerts'
import setAuthToken from './components/utils/setAuthToken'

if (localStorage.token) {
 setAuthToken(localStorage.token)
}

function App() {
 return (
  <AuthState>
   <ContactState>
    <AlertState>
     <Router>
      <Navbar />
      <Alerts />
      <Routes />
     </Router>
    </AlertState>
   </ContactState>
  </AuthState>
 )
}

export default App
