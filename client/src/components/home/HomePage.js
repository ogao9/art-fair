import React from "react";
import {Link} from'react-router-dom'
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import Slideshow from './Slideshow'
import './HomePage.css'

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
        <div className="Home-container">
            <Header/>
            <div className="Home-main">
                <div className="welcome-message">
                    <h1>Welcome to Design.io!</h1>
                    <p>Let us help you find inspiration for your next project</p>
                </div>
                <div className="feature-slideshow">
                    
                </div>
            </div>

            <div className="Home-extras">
                <Slideshow/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;


