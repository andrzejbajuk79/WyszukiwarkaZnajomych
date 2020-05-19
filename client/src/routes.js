import React, {Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import asyncComponent from './HOC/asyncComponent'

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
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />

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
