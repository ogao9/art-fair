import React, {useState} from "react";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import UserForm from "./UserForm";
import "./FormWelcome.css";


const FormWelcome = ({loginInfo}) => {

    return (
        <div>
            <Header/>
            <div className="form-welcome">
                <div className="form-flex-container">
                    <UserForm loginInfo={loginInfo}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FormWelcome;


