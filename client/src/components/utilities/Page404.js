import React from 'react'
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import './Utilities.scss'

const Page404 = () => {
    return (
        <>
            <Header/>
            <div className="page404-container">
                <h1>404 Not Found</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Page404
