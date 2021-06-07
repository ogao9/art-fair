import React from "react";
import { Link, Redirect } from "react-router-dom";
import userServices from "../../services/userServices";
import Logo2 from "../../images/logo2.png";
import "./Login.css";

const Login = ({ loginInfo, setLoginInfo }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newUser, setNewUser] = React.useState(false);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleCreate = async (e) => {
        e.preventDefault(); //what does this do? I THINK WE ACTUALLY NEED THIS LINE
        const newUser = { username, password }; //object shorthand for username:username and password:password
        const res = await userServices.addUser(newUser);
    
        console.log("Submit Pressed");
    };

    const handleValidate = async (e) => {
        e.preventDefault(); 
        const user_info = { username, password };
        const res = await userServices.checkUser(user_info);

        if (res){
            setLoginInfo({ username: res.username, id: res._id, cards: res.cards });
            //return <Redirect to='/Form'/> 
        } 
        else setLoginInfo(null);

        console.log("Validating and Setting Login Info");
    };

    const validateTest = (e) =>{
        e.preventDefault();
        const cards = ["176"];
        const id="176";
        if(username==='Oliver' && password==="123456")
            setLoginInfo([{ username, id, cards }])
        else
            setLoginInfo(null);
    }

    const [users, setUsers] = React.useState(null)
    const createTest = (e) =>{
        e.preventDefault();
        setUsers(username)
        console.log("Create Pressed")
    }


    
    return (
        <div className="Login">
            <div>
                <div className="Login-header">
                    <Link to="/">
                        <img src={Logo2}></img>
                    </Link>
                    <h3>For the inner artist in everyone</h3>
                    <h4>This is the door to a field of happiness</h4>
                </div>

                <form
                    className="Login-form"
                    onSubmit={newUser ? createTest : validateTest}
                >
                    <h2>{newUser ? "Sign Up" : "Log In"}</h2>
                    <section className="username">
                        <label htmlFor="username">Username</label>
                        <p>
                            {newUser ? "Already have an account? " : "Need an account? "}
                        </p>
                        <button type="button" onClick={() => setNewUser(!newUser)}>
                            {newUser ? "Log In" : "Sign up"}
                        </button>
                    </section>
                    <input id="username" type="text" value={username} onChange={handleUsername}></input>

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    ></input>

                    <button type="submit">{newUser ? "Sign Up" : "Log In"}</button>
                </form>

                <h2>Logged In? {loginInfo ? "Yes" : "no"}</h2>
                <h2>Created? {users? "yes" : "no"}</h2>
                {/*<h2>Reponse From Server: {loginInfo ? "Success" : "Denied!"}</h2>*/}
            </div>
        </div>
    );
};

export default Login;
