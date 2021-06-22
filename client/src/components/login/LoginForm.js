import React, {useState} from "react";

const LoginForm = ({handleSignUp, handleLogin, loading, errors}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);

    const signUpClicked = (e) => {
        e.preventDefault(); //what does this do? I THINK WE ACTUALLY NEED THIS LINE
        handleSignUp({username, password}); //object shorthand for username:username and password:password
    };

    const loginClicked = (e) => {
        e.preventDefault();
        handleLogin({username, password});
    };

    return (
        <form className="Login-form" onSubmit={newUser ? signUpClicked : loginClicked}>
            <h1>{newUser ? "Create an Account" : "Welcome Back!"}</h1>
            
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            ></input>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            ></input>

            <div className="error-msg">{errors ? "Passwords must have at least 6 characters" : null} </div>

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
