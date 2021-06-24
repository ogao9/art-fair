import React, {useContext} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Featured from "./components/featured/Feature"
import Gallery from "./components/design-home/Gallery";
import About from "./components/about/About";
import Forum from "./components/forum/Forum"
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Page404 from "./Page404"

import {UserContext, UserProvider} from "./UserContext"
import ScrollToTop from "./ScrollToTop";

function PrivateRoute({children, ...rest}){
    const {user} = useContext(UserContext)
    //children refers to the <Profile> component and ...rest refers to the props passed in (path and exact)
    //react router invokes the render function when the route matches
    const isAuth = user ? true : false;
    return(
        <Route {...rest} render={()=>{
            return isAuth 
                ? children
                : <Redirect to='/Login'/>
        }} />
    )
}

function App() {

    return (
        <UserProvider>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Featured" exact component={Featured} />
                <Route path="/Gallery" component={Gallery} />
                <Route path="/About" exact component={About} />
                <Route path="/Forum" exact component={Forum} />
                <Route path="/Login" exact component={Login}/>
                <PrivateRoute path="/Profile" exact><Profile/></PrivateRoute>
                <Route path='/' component={Page404}/>
            </Switch>
        </UserProvider>
    );
}

export default App;
