import React, {useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import "./Login.scss";
import { UserContext } from "../../UserContext";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(false)
    const {user, setUser} = useContext(UserContext)
    let history = useHistory(); //browser history, used for redirecting

    const handleSignUp = async (userInfo) => {
        try{
            setLoading(true);

            if(userInfo.password.length < 6){
                setErrors(true);
                setLoading(false);
            }else{
                const newUser = { username: userInfo.username, password: userInfo.password }; 
                const res = await userServices.addUser(newUser);

                if(res){
                    alert('Sign up Success!')
                    history.push('/Profile');
                    console.log("Status: ", res);
                }
                setLoading(false);
            }
        }catch(err){
            console.log("Error while creating new user", err)
        }
    };

    const handleLogin = async (userInfo) => {
        try{
            setLoading(true);

            if(userInfo.password.length < 6){
                setErrors(true);
                setLoading(false);
            }else{
            const res = await userServices.checkUser(userInfo); //userInfo is {username, password}
                if (res) {
                    setUser({username:res.username, id:res._id, cards:res.cards});
                    alert(`Welcome ${res.username}!`)
                    history.push("/Profile");  //redirect user to profile
                    setLoading(false);
                } else {
                    setUser(null);
                    alert('Login Failed!')
                    setLoading(false);
                }
            }
        }catch(err){
            console.log("Error while validating user", err);
        }
    };

    const handleLogin1 = () =>{
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
                        <LoginForm handleSignUp={handleSignUp} handleLogin={handleLogin} loading={loading} errors={errors}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
