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

const App2 = () => {
    return (
        
            <Switch>
                <Route path="/Home" exact component={HomePage}/>
                <Route path="/About" exact component={About} />
            <Route path="/ArtCentral" exact component={ArtCentral}/>
            <Route path="/Form" exact component={FormWelcome}/>
            <Route path="/Profile" exact component={Profile}/>
            </Switch>
    )
}

export default App2
