import React, {useState} from "react";

const LoginForm = ({handleSignUp, handleLogin}) => {
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
            <h2>{newUser ? "Sign Up" : "Log In"}</h2>
            
            <section className="username-flex">
                <label htmlFor="username">Username</label>
                <p>{newUser ? "Already have an account? " : "Need an account? "}
                <button type="button" onClick={() => setNewUser(!newUser)}>
                    {newUser ? "Log In" : "Sign up"}
                </button>
                </p>
            </section>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            ></input>

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            ></input>

            <button type="submit">{newUser ? "Sign Up" : "Log In"}</button>
        </form>
    );
};

export default LoginForm;
