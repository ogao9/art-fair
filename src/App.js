import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import About from './components/About'
import ArtCentral from './components/art-central/ArtCentral'
import Profile from './components/Profile'
import UserForm from'./components/multi-step-form/UserForm'


function App() {
  return (
    <Router>
        <Header/>

        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/About" exact component={About} />
            <Route path="/ArtCentral" exact component={ArtCentral}/>
            <Route path="/Form" exact component={UserForm}/>
            <Route path="/Profile" exact component={Profile}/>
        </Switch>

        <Footer/>
    </Router>
  );
}

export default App;






