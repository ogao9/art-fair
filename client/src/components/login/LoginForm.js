import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import userServices from "../../services/userServices";
import { UserContext } from "../utilities/UserContext";

const LoginForm = ({onLoginSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const {setUser} = useContext(UserContext);
    const history = useHistory(); 
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true); setError("");

        if (password.length < 6) {
            setError("Passwords must have at least 6 characters")
        } else {
            const idx = email.indexOf("@");
            const inducedName = email.charAt(0).toUpperCase() + email.substring(1, idx);
            const newUser = {
                email: email,
                password: password,
                username: inducedName,
            };

            const {status, data} = await userServices.addUser(newUser);

            if(status === 200) 
                setError(data.message);
            else if(status === 201){
                setUser(data);   
                history.push("/Profile");
            }else 
                alert("Sign up failed!")
        }
        setLoading(false); 
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); setError("")

        if (password.length < 6) {
            setError("Passwords must have at least 6 characters")
        } else {
            const res = await userServices.checkUser({ email, password });
            if (res) {
                setUser(res);
                onLoginSuccess();
            } else {
                setError("Your email or password is incorrect")
            }
        }
        setLoading(false); //"can't perform state update on unmounted component" error occurs here
    };

    const handleGuest = async(e)=>{
        e.preventDefault();
        setLoading(true); setError("")

        const res = await userServices.checkUser({email: "guest@design.io", password: "123456"})
        if (res) {
            setUser(res);
            onLoginSuccess();
        } else {
            alert("Sorry, Guest Login failed.")
        }
    }

    return (
        <div className="login-form-container">
            <div className="login-form-header">
                    <h1>{newUser ? "Create an Account" : "Sign in to Design.io"}</h1>
                    <p>{newUser ? "Start your design adventure today" : "A place to discover and share designs"}</p>
            </div>

            <form className="Login-form" onSubmit={newUser ? handleSignUp : handleLogin}>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />

                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />

                <div className="error-msg">{error ? error : null} </div>

                <button type="submit">{newUser ? "Sign Up" : "Sign In"}</button>
                {loading ? <i id="login-spinner" class="fas fa-spinner fa-3x"></i> : null}

                <section className="login-footer">
                    <hr/>
                    <p>{newUser ? "Already have an account? " : "Need an account? "}</p>
                    {newUser 
                    ? <button type="button" onClick={() => setNewUser(false)}> Log In Here </button>
                    : <div>
                        <button className="guest-login" type="button" onClick={handleGuest}>Guest Login</button>
                        <span> - or - </span>
                        <button className="guest-login" type="button" onClick={() => setNewUser(true)}> Sign Up </button>
                    </div>
                    }
                </section>
            </form>
        </div>
    );
};

export default LoginForm;