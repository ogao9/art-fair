import React from "react";
import {Link} from'react-router-dom'
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import Logo2 from '../../images/logo2.png'
import Slideshow from './Slideshow'
import './HomePage.css'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/button'

const HomePage = ({loginInfo}) => {
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
        <div>
            <div className="Home">
                <div className="nav-container">
                    <Link to='/'><img src={Logo2} alt="logo"></img></Link>
                    <ul>
                        <li><Link to='/About' className="RouterLink">About</Link></li>
                        <li><Link to='/ArtHome' className="RouterLink">Art Home</Link></li>
                        <li><Link to='/Profile' className="RouterLink">Profile</Link></li>
                        <li><Link to='/Form' className="RouterLink">Form</Link></li>
                        <li>{false
                            ? <Avatar>{loginInfo.username[0]}</Avatar>
                            : LoginButton
                            }
                        </li>
                    </ul>
                </div>
                <div className="Home-content">
                    <div className="welcome-message">
                        <h3>Welcome to Art Fair 3.0! Showcase your art to the world</h3>
                    </div>
                    <div className="slideshow">
                        <h3>4-card slideshow here</h3>
                        <Slideshow/>
                    </div>
                </div>
            </div>
            <div className="Home-extras">
                    <h1>Put Something Interesting Here: Go find some inspiration</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;

