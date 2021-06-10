import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import userServices from "../../services/userServices";
import "./Login.css";

const Login = ({ loginInfo, setLoginInfo }) => {
    let history = useHistory(); //browser history, used for routing

    const handleSignUp = async (userInfo) => {
        console.log("Creating New User...");
        try{
            const newUser = { username: userInfo.username, password: userInfo.password }; 
            const res = await userServices.addUser(newUser);
            if(res){
                alert('Sign up Success!')
                history.push('/');
                console.log("Status: ", res);
            }
        }catch(err){
            console.log("Error while creating new user", err)
        }
    };

    const handleLogin = async (userInfo) => {
        console.log("Validating Login Info...");
        try{
            const res = await userServices.checkUser(userInfo); //userInfo is {username, password}
            if (res) {
                setLoginInfo({username:res.username, id:res._id, cards:res.cards});
                alert(`Welcome ${res.username}!`)
                history.push("/");  //redirect user to homepage
            } else {
                setLoginInfo(null);
                alert('Login Failed!')
            }
        }catch(err){
            console.log("Error while validating user", err);
        }
    };

    return (
        <div>
            <Header />
            <div className="Login-container">
                <div className="Login">
                    <div className="Login-left">
                        <h1>Get Inspired. Inspire Others.</h1>
                        <h3>Discover designs to inject into your daily life</h3>
                        <Link to='/ArtHome'><button className="explore-button">Explore Designs</button></Link>
                    </div>
                    <div className="Login-right">
                        <LoginForm handleSignUp={handleSignUp} handleLogin={handleLogin} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
