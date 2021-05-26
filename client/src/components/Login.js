import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const Login = ({ info, setAuthenticate, setAvatarLetter }) => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [loginError, setLoginError] = useState(false);

    const onClick = () => {
        setShow(!show);
    };

    const onSubmit = () => {
        setAuthenticate(checkCredentials());

        if (!checkCredentials()) setLoginError(true);
        else setAvatarLetter(username[0]);
    };

    const checkCredentials = () => {
        for (let index = 0; index < info.length; index++) {
            if (
                username === info[index]["Username"] &&
                accessCode === info[index]["Access Code"]
            )
                return true;
        }
        return false;
    };

    const useStyles = makeStyles((theme) => ({
        form: {
            margin: theme.spacing(1),
            padding: "5px",
            width: "25ch",
            backgroundColor: "whitesmoke",
            border: "1px solid black",
        },
    }));
    const classes = useStyles();

    //This form needs to be able to close
    const LoginForm = (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField
                error={loginError}
                className={classes.margin}
                label="Username"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                error={loginError}
                label="Access Code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={onSubmit}>
                Login
            </Button>
        </form>
    );

    const LoginButton = (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className="LoginButton"
        >
            Login
        </Button>
    );

    return <div>{show ? LoginForm : LoginButton}</div>;
};

export default Login;


/* Form without Material UI style
 
    const login = <form onSubmit={onSubmit}> 
        <div>
            <label>Your Name</label> 
            <input type="text"></input>
        </div>
        <div>
            <label>Access Code</label> 
            <input type="text"></input>
        </div>
        <div>
             <input type="submit" value="Login"></input>            
        </div>
    </form>
*/
