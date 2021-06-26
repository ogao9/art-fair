import React from 'react'
import {Redirect} from 'react-router-dom'
//This is a higher-order component to wrap the authentication logic
//It either returns the component we passed in, or it redirects you
const withAuth = (Component) => {
    const AuthRoute = ()=>{
        const isAuth = false;
        if(isAuth){
            return <Component/>
        }else{
            return <Redirect to='/'/>
        }
    }
    return AuthRoute;
}

export default withAuth
