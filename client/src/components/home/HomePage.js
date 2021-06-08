import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Slideshow from "./Slideshow";
import "./HomePage.css";

const HomePage = ({ loginInfo }) => {
    return (
        <div>
            <Header />
            <div className="Home-main">
                <div className="welcome-message">
                    <h1>Get Inspired</h1>
                    <p>
                        Design is everywhere, from landscaping outdoors to arranging
                        your desk indoors. Let us help you inject some
                        creative design into your daily life.
                    </p>
                </div>
                <div className="feature-slideshow"></div>
            </div>

            <div className="Home-extras">
                <Slideshow />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
