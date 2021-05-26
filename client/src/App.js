import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import About from './components/About'
import ArtCentral from './components/art-central/ArtCentral'
import Profile from './components/profile/Profile'
import FormWelcome from'./components/multi-step-form/FormWelcome'
import Login from './components/login/Login'
import App2 from './App2'

function App() {
  return (
    
        
        <Switch>
            <Route path="/Hello" exact >
              <Header/>
              <App2/>
              <Footer/>
            </Route>

            <Route path="/Login" exact>
              <Login/>
            </Route>
            
            <Route path="/">
              <Header/>
              <HomePage/>
              <Footer/>
            </Route>
        </Switch>
        
    
  );
}

export default App;


/*

            This Route is a "default" route. Every route will match this one (w/o exact)
            This is why we placed it last
            
*/