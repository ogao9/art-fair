import React, {useContext} from "react";
import { UserContext } from "./UserContext";
import { Redirect, Route } from "react-router-dom";

//children refers to the <Profile> component and ...rest refers to the props passed in (path and exact)
//react router invokes the render function when the route matches
export function PrivateRoute({children, ...rest}){
    const {user} = useContext(UserContext)
    const isAuth = user ? true : false;

    return(
        <Route {...rest} render={()=>{
            return isAuth 
                ? children
                : <Redirect to='/Login'/>
        }} />
    )
}

export function CategoryRoute({children, path}){
    const categories = ["Indoor", "Outdoor", "Digital", "Audio", "Wildcard", "Minimal"]
    const validCategory = categories.includes("") ? true : true;

    return(
        <Route path={path} render={()=>{
            return validCategory
                ? children
                : <Redirect to='/Gallery'/>
        }} />
    )
}