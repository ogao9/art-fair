import React from 'react';
import {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Login = () => {
    const[show, setShow] = useState(false);

    const onClick = () => {
        setShow(!show);
    }

    const onSubmit = () => {
        console.log("submitted");
    }

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

    const classes = useStyles();

    const login2 = <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Username"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            ),
            }}/>
        </div>
        <div><TextField id="standard-basic" label="Password"/></div>
        <div><Button variant="contained" color="primary">Login</Button></div>
    </form>
    

    return (
        <div className="Login">
            <h3>Creator and Admin Login Form</h3>
            <p>Gives access to AddForm and delete buttons</p>
            <button onClick={onClick}>Show Form</button>
            {show ? <p>{login2}</p> : null}
        </div>
    )
}

export default Login
