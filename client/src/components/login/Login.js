import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import "./Login.scss";

const Login = () => {
    const history = useHistory();
    const toProfile = () => {
        history.push("/Profile");
    };

    return (
        <>
            <Header />
            <div className="top-spacer"></div>

            <div className="login-container-temp">
                <LoginForm onLoginSuccess={toProfile} />
            </div>
            <Footer />
        </>
    );
};

export default Login;

{/* <div className="login-container">
                <div className="login-left">
                    <div className="login-left-text">
                        <div className="top-spacer"></div>
                        
                    </div>
                </div>

                <div className="login-right">
                    <div className="top-spacer"></div>
                    <LoginForm onLoginSuccess={toProfile} />
                </div>
            </div> */}