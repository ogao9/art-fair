import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./HomePage.scss";

const HomePage = ({ loginInfo }) => {
    return (
        <div>
            <Header />
            <div className="home-welcome">
                <div className="welcome-message">
                    <h1>Get Inspired</h1>
                    <p>
                        Design is everywhere, from landscaping outdoors to arranging
                        your desk indoors. Let us help you inject some
                        creative design into your daily life.
                    </p>
                    <Link to='/ArtHome'><button className="big-discover-button">Discover</button></Link>
                </div>
            </div>
            <div className="flow-chart">
                <div className="flow-item">
                    <h1>How to use Design.io</h1>
                </div>
                <div className="flow-item">
                    <h1>Step 1</h1>
                </div>
                <div className="flow-item">
                    <h1>Step 1</h1>
                </div>
                <div className="flow-item">
                    <h1>Step 1</h1>
                </div>
                <div className="flow-item">
                    <h1>Step 1</h1>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default HomePage;


