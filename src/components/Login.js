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


const Login = ({info, setAuthenticate}) => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [accessCode, setAccessCode] = useState('');

    const onClick = () => {
        setShow(!show);
    }

    const onSubmit = () => {
        console.log("submitted");
        setAuthenticate(checkCredentials());
    }

    const checkCredentials = () => {
        for(let index = 0; index<info.length; index++){
            if(username === info[index].Username && accessCode === info[index]["Access Code"])
                    return true;
        }
        return false;
    }

    const classes = useStyles();
    const login = <form className={classes.root} noValidate autoComplete="off">
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
            }} value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div><TextField id="standard-basic" label="Access Code" 
                value={accessCode} onChange={(e)=> setAccessCode(e.target.value)}/>
        </div>
        <div>
            <Button variant="contained" color="primary" onClick={onSubmit}>Login</Button>
        </div>
    </form>
    

    return (
        <div className="Login">
            <div>
                <Button variant="contained" color="primary" onClick={onClick} className="LoginButton">Login</Button>
                <h3>Creator and Admin Login</h3>
                <p>Gives access to AddForm and delete buttons</p>
            </div>

            {show ? login : null}
        </div>
    )
}

export default Login




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