import React from 'react'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import './Forum.scss'

const Forum = () => {
    return (
        <>
            <Header/>
            <div className="forum-container">
                <div>
                    <div><i class="fas fa-hourglass-half fa-2x"/></div>
                    <h1>Coming Soon</h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Forum 
