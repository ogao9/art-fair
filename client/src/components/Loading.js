import React from 'react'
import Header from './headfoot/Header'
import Footer from './headfoot/Footer'

const Loading = () => {
    return (
        <>
            <Header/>
            <div style={LoadingStyle}>
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


const LoadingStyle = {
    width: "100%",
    height: "90vh",
    backgroundColor: "",
    color: "whitesmoke",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}