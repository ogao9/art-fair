import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import ArtCentral from "./components/art-central/ArtCentral";
import Profile from "./components/profile/Profile";
import FormWelcome from "./components/multi-step-form/FormWelcome";
import Login from "./components/login/Login";

function App() {
    const [loginInfo, setLoginInfo] = React.useState({cards:["60b67ef10f44ea78fc6b3fae"], id:"60b005d01aae002a58c41bcf"});
    const setLogin = (input) => {
        setLoginInfo(input);
    };

    return (
        <Switch>
            <Route path="/Login" exact>
                <Login loginInfo={loginInfo} setLoginInfo={setLogin} />
            </Route>
            <Route path="/About" exact component={About} />
            <Route path="/ArtCentral" exact component={ArtCentral} />
            <Route path="/Form" exact>
                <FormWelcome loginInfo={loginInfo}/>
            </Route>
            <Route path="/Profile" exact>
                <Profile loginInfo={loginInfo}/>
            </Route>
            <Route path="/">
                <HomePage loginInfo={loginInfo} />
            </Route>
        </Switch>
    );
}

export default App;

/*

            This Route is a "default" route. Every route will match this one (w/o exact)
            This is why we placed it last
            
*/
