import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import ArtHome from "./components/art-central/ArtHome";
import ArtCentral from "./components/art-central/ArtCentral";
import Profile from "./components/profile/Profile";
import FormWelcome from "./components/multi-step-form/FormWelcome";
import Login from "./components/login/Login";

function App() {
    const [loginInfo, setLoginInfo] = React.useState([]);
    const setLogin = (input) => {
        setLoginInfo(input);
    };

    return (
        <Switch>
            <Route path="/Login" exact>
                <Login loginInfo={loginInfo} setLoginInfo={setLogin} />
            </Route>
            <Route path="/About" exact component={About} />
            <Route path="/ArtHome" exact component={ArtHome} />
            <Route path="/ArtCentral" exact component={ArtCentral} />
            <Route path="/Form" exact>
                <FormWelcome loginInfo={loginInfo} />
            </Route>
            <Route path="/Profile" exact>
                <Profile loginInfo={loginInfo} />
            </Route>
            <Route path="/">
                <HomePage loginInfo={loginInfo} />
            </Route>
        </Switch>
    );
}

export default App;
