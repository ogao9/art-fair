import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Logo2 from '../../images/logo2.png'
import './headfoot.css'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import orange from '@material-ui/core/colors/orange';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [avatarLetter, setAvatarLetter] = useState('');

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      //event.currentTarget refers to the HTML element to which the event handler has been attached
      //SO, anchorE1 is the Button??
      //the Menu is open when anchorE1 is NOT null
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      //when any menu item is pressed or when people click away, the HTML element is set to null (nothing)
    };

    const handleLogout = () => {
        setAnchorEl(null);
        setAuthenticated(false);
    };


    //--- Logged In Avatar --- 
    const useStyles = makeStyles((theme) => ({
        orange:{
            color: 'white',
            backgroundColor: orange[500],
        }
    }))
    const classes = useStyles();

    const avatar = 
    <div>
        <Button onClick={handleClick}>
            <Avatar className={classes.orange}>{avatarLetter}</Avatar>
        </Button>
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link to='/Profile'>Profile</Link></MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </div>;

   
    //Fetching login credentials from db
    const [loginInfo, setLoginInfo] = useState([]);

    useEffect(() => {
        const setData = async() =>{
          const logindata = await getLoginData();
          setLoginInfo(logindata)
        }
        setData();
      },[])   //useEffect only happens if something in this array changes

    const getLoginData = async () => {
        const response = await fetch('http://localhost:5000/credentials')
        const data = await response.json();
        return data;
    }

    const LoginButton = (
        <Button
            variant="contained"
            color="primary"
            //onClick={onClick}
            className="LoginButton"
        >
            <Link to='/Login'>Login</Link>
        </Button>
    );


    return (
        <div className="Header">
            <ul className="Navbar">
                <li><Link to='/'><img src={Logo2} alt='logo'></img></Link></li>
                <li><Link to='/' className="RouterLink">Home</Link></li>
                <li><Link to='/About' className="RouterLink">About</Link></li>
                <li><Link to='/ArtHome' className="RouterLink">Art Home</Link></li>
                <li><Link to='/Profile' className="RouterLink">Profile</Link></li>
                <li style={{float:'right'}}>
                    {authenticated
                    ? avatar
                    : LoginButton
                    }
                </li>
            </ul>
        </div>
    )
}

export default Header


/*
    //Sample Data used for testing
    const myLoginInfo = [{
        "Username": "Oliver",
        "Access Code": "123456"
      },
      {
        "Username": "Brian0",
        "Access Code": "123456"
    }]
*/
