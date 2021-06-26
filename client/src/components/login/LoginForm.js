import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import { UserContext } from "../utilities/UserContext";

const LoginForm = ({onLoginSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const {setUser} = useContext(UserContext);
    const history = useHistory(); 
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true); setPwdError(false);

        if (password.length < 6) {
            setPwdError(true);
        } else {
            const idx = email.indexOf("@");
            const inducedName = email.charAt(0).toUpperCase() + email.substring(1, idx);
            const newUser = {
                email: email,
                password: password,
                username: inducedName,
            };

            const res = await userServices.addUser(newUser);

            if (res) {
                alert("Sign up Success!");
                setUser(res);   //log the user in as well
                history.push("/Profile");
            } else alert("Sign up failed!")
        }

        setLoading(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); setPwdError(false); setLoginError(false);

        if (password.length < 6) {
            setPwdError(true);
        } else {
            const res = await userServices.checkUser({ email, password });
            if (res) {
                setUser(res);
                onLoginSuccess();
            } else {
                setLoginError(true);
            }
        }

        setLoading(false);
    };


    return (
        <form className="Login-form" onSubmit={newUser ? handleSignUp : handleLogin}>
            <h1>{newUser ? "Create Account" : "Welcome to Design.io!"}</h1>
            
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
            <div className="error-msg">{loginError ? "Your email or password is incorrect" : null} </div>

            <button type="submit">{newUser ? "Sign Up" : "Log In"}</button>
            {loading ? <i id="login-spinner" class="fas fa-spinner fa-3x"></i> : null}

            <section className="login-footer">
                <hr/>
                <p>{newUser ? "Already have an account? " : "Need an account? "}</p>
                <button type="button" onClick={() => setNewUser(!newUser)}>
                    {newUser ? "Log In Here" : "Sign Up"}
                </button>
            </section>
        </form>
    );
};

export default LoginForm;