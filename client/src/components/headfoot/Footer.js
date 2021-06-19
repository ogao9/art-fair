import React from 'react'
import Logo from '../../images/Logo.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="Footer">
            <img src= {Logo} alt="logo"></img>

            <div style={{margin:20}}>
                <p>Copyright &copy; 2021 | Powered by Dell</p>
                <p>Design.io Presented by Project O</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer