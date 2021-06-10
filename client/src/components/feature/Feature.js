import React from 'react'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Slideshow from './Slideshow'
import './Feature.css'

const Feature = () => {
    return (
        <div className="component-container">
            <Header/>
            <div className="feature-container">
                <div className="feature-left">
                    <h1>Check out this week's featured designs!</h1>
                </div>
                <div className="feature-right">
                    <Slideshow/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Feature
