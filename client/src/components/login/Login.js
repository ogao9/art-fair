import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import userServices from "../../services/userServices";
import "./Login.css";

const Login = ({ loginInfo, setLoginInfo }) => {

    const handleSignUp = async (userInfo) => {
        const newUser = { username: userInfo.username, password: userInfo.password }; 
        const res = await userServices.addUser(newUser);

        console.log("Creating New User...");
    };

    const handleLogin = async (userInfo) => {
        const res = await userServices.checkUser(userInfo); //userInfo is {username, password}

        if (res) {
            setLoginInfo({username: res.username, id: res._id, cards: res.cards });
            //return <Redirect to='/Form'/>
        } else setLoginInfo(null);

        console.log("Validating Login Info...");
    };


    return (
        <div>
            <Header />
            <div className="Login-container">
                <div className="Login">
                    <div className="Login-left">
                        <h1>Get Inspired. Inspire Others.</h1>
                        <h3>Discover designs to inject into your daily life</h3>
                        <button className="explore-button"><Link to='/ArtHome'>Explore Designs</Link></button>
                    </div>
                    <div className="Login-right">
                        <LoginForm handleSignUp={handleSignUp} handleLogin={handleLogin} />
                    </div>
                </div>
                <h2>Logged In? {loginInfo ? "Yes" : "no"}</h2>
                <h2>Created? {loginInfo ? "yes" : "no"}</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
