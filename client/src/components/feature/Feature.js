import React from 'react'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Slideshow from './Slideshow'
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <Header/>
            <div className="feature-container">
                <h1>Check out this week's featured designs!</h1>
                <Slideshow/>
            </div>
            <Footer/>
        </div>
    )
}

export default Feature
