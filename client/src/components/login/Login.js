import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import "./Login.scss";

const Login = ({ loginInfo, setLoginInfo }) => {
    const [loading, setLoading] = useState(false)
    let history = useHistory(); //browser history, used for routing

    const handleSignUp = async (userInfo) => {
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

    const handleLogin1 = async (userInfo) => {
        try{
            setLoading(true);
            const res = await userServices.checkUser(userInfo); //userInfo is {username, password}
            if (res) {
                setLoginInfo({username:res.username, id:res._id, cards:res.cards});
                alert(`Welcome ${res.username}!`)
                history.push("/Profile");  //redirect user to profile
                setLoading(false);
            } else {
                setLoginInfo(null);
                alert('Login Failed!')
                setLoading(false);
            }
        }catch(err){
            console.log("Error while validating user", err);
        }
    };

    const handleLogin = () =>{
        history.push("/Profile")
    }

    return (
        <>
            <Header />
            <div className="login-outer-container">
                <div className="login-spacer"></div>

                <div className="login-inner-container">
                    <div className="login-left">
                        <h1>Get Inspired. <br/> Inspire Others.</h1>
                        <p>Discover designs to inject into your daily life</p>
                        <Link to='/DesignHome'><button className="explore-button">Explore Designs</button></Link>
                    </div>

                    <div className="login-right">
                        <LoginForm handleSignUp={handleSignUp} handleLogin={handleLogin} loading={loading} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
