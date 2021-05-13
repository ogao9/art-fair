import React from 'react'
import Logo2 from '../images/logo2.png'
import {Link} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const useStyles = makeStyles((theme) => ({
        orange:{
            color: 'white',
            backgroundColor: orange[500],
        }
    }))
    const classes = useStyles();

    return (
        <div className="Header">
            <ul className="Navbar">
                <li><Link to='/'><img src={Logo2}></img></Link></li>
                <li><Link to='/' className="RouterLink">Home</Link></li>
                <li><Link to='/About' className="RouterLink">About</Link></li>
                <li><Link to='/ArtDisplay' className="RouterLink">Art Central</Link></li>
                <li><Link to='/Admin' className="RouterLink">Admin</Link></li>
                <li style={{float:'right'}}>
                    <Button onClick={handleClick}>
                        <Avatar className={classes.orange}>O</Avatar>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to='/Profile'>Profile</Link></MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </li>
            </ul>
        </div>
    )
}

export default Header


//<li><a href='/ArtDisplay' className="RouterLink">Art Central</a></li>