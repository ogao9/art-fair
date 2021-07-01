import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserProvider } from "./components/utilities/UserContext";
import { PrivateRoute } from "./components/utilities/CustomRoutes";
import ScrollToTop from "./components/utilities/ScrollToTop";
import HomePage from "./components/home/HomePage";
import Featured from "./components/featured/Feature"
import Gallery from "./components/design-home/Gallery";
import About from "./components/about/About";
import Forum from "./components/forum/Forum"
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Page404 from "./components/utilities/Page404"

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