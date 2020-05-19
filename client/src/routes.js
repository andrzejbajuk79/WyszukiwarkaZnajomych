//esLint-disable-next-line
import React, {Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import asyncComponent from './HOC/asyncComponent'
import {Logout} from './components/auth/Logout'
import PrivateRoute from './HOC/PrivateRoute'

let AsyncAbout
//perwszy sposob LAZY COMP poprzez HOC
AsyncAbout = asyncComponent(() => {
 return import('./pages/About')
})
//drugisposob LAZY
// AsyncAbout = React.lazy(() => import('./pages/About'))

const Routes = () => {
 return (
  <div className="container">
   <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />

    {/* <Route
     path="/about"
     render={(props) => (
      <Suspense fallback={<div>loading...</div>}>
       <AsyncAbout {...props} />
      </Suspense>
     )}
    /> */}
   </Switch>
  </div>
 )
}

export default Routes
