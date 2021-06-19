import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Feature from "./components/featured/Feature"
import DesignHome from "./components/design-home/DesignHome";
import Gallery from "./components/design-home/Gallery";
import About from "./components/about/About";
import Forum from "./components/forum/Forum"
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";


function App() {
    const [loginInfo, setLoginInfo] = React.useState(null);
    const setLogin = (user_obj) => {
        setLoginInfo(user_obj);
    };

    function PrivateRoute({children, ...rest}){
        //children refers to the <Profile> component and ...rest refers to the params
        //react router invokes the render function every time the route matches
        const isAuth = loginInfo ? true : true;
        return(
            <Route {...rest} render={()=>{
                return isAuth 
                    ? children
                    : <Redirect to='/Login'/>
            }} />
        )
    }

    return (
        <Switch>
            <Route path="/Login" exact>
                <Login loginInfo={loginInfo} setLoginInfo={setLogin} />
            </Route>
            <Route path="/About" exact component={About} />
            <Route path="/DesignHome" exact component={DesignHome} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Feature" exact component={Feature} />
            <Route path="/Forum" exact component={Forum} />
            <PrivateRoute path="/Profile" exact>
                <Profile loginInfo={loginInfo} />
            </PrivateRoute>
            <Route path="/">
                <HomePage loginInfo={loginInfo} />
            </Route>
        </Switch>
    );
}

export default App;
