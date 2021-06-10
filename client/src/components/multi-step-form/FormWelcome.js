import React, {useState} from "react";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import UserForm from "./UserForm";
import "./FormWelcome.css";


const FormWelcome = ({loginInfo}) => {

    const LoginFlag = 
        <div><h1>You Need to Log In before submitting your work</h1></div>

    return (
        <div>
            <Header/>
            <div className="form-welcome">
                <div className="gradient-header">
                    <h1>Share Your Design</h1>
                </div>
                <div className="form-flex-container">
                    <UserForm loginInfo={loginInfo}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FormWelcome;


