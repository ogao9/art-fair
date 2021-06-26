import React from 'react'
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import './Utilities.scss'

const Loading = () => {
    return (
        <>
            <Header/>
            <div className="loading-container">
                <div>
                    <i id="login-spinner" class="fas fa-spinner fa-3x"/>
                    <h2>Loading</h2>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Loading