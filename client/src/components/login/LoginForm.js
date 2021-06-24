import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const {user, setUser} = useContext(UserContext);
    const history = useHistory(); 

    const handleSignUp = async (userInfo) => {
        try{
            setLoading(true);

            if(userInfo.password.length < 6){
                setPwdError(true); 
            }else{
                const idx = userInfo.email.indexOf('@');
                const inducedName = userInfo.email.charAt(0).toUpperCase() + userInfo.email.substring(1, idx);
                const newUser = { email: userInfo.email, password: userInfo.password, username: inducedName }; 

                const res = await userServices.addUser(newUser);

                if(res){
                    alert('Sign up Success!')
                    setUser(res) //log the user in
                    history.push('/Profile');
                }else   
                    alert('Sign up failed!')
            }
            setLoading(false);
        }catch(err){
            console.log("Error while creating new user", err)
        }
    };

    const handleLogin = async (userInfo) => {
        try{
            setLoading(true);

            if(userInfo.password.length < 6){
                setPwdError(true);
            }else{
                const res = await userServices.checkUser(userInfo); 
                if (res) {
                    setUser(res);
                    alert(`Welcome ${res.username}!`) //replace with something better
                    history.push("/Profile");  //redirect user to profile
                } else {
                    setUser(null);
                    alert('Login Failed!') //replace with snackbar
                }
            }
            setLoading(false);
        }catch(err){
            console.log("Error Logging In", err);
        }
    };

    const signUpClicked = (e) => {
        e.preventDefault(); 
        handleSignUp({email, password}); 
    };

    const loginClicked = (e) => {
        e.preventDefault();
        handleLogin({email, password});
    };

    return (
        <form className="Login-form" onSubmit={newUser ? signUpClicked : loginClicked}>
            <h1>{newUser ? "Create an Account" : "Welcome to Design.io!"}</h1>
            
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            ></input>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            ></input>

            <div className="error-msg">{pwdError ? "Passwords must have at least 6 characters" : null} </div>

            <button type="submit">{newUser ? "Sign Up" : "Log In"}</button>

            <section>
                <hr/>
                <p>{newUser ? "Already have an account? " : "Need an account? "}</p>
                <button type="button" onClick={() => setNewUser(!newUser)}>
                    {newUser ? "Log In Here" : "Sign Up"}
                </button>
            </section>

            {loading ? <i id="login-spinner" class="fas fa-spinner fa-3x"></i> : null}
        </form>
    );
};

export default LoginForm;
