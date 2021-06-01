import React from 'react'
import Logo2 from '../images/logo2.png'

const Footer = () => {
    return (
        <footer className="Footer">
            <img src= {Logo2} alt="logo"></img>

            <div style={{margin:20}}>
                <p>Copyright &copy; 2021 | Powered by Dell</p>
                <p>Art Fair 3.0 Presented by Project O</p>
                <p>Inspired by <a href="https://www.theotherartfair.com/" target="_blank" rel='noreferrer'>
                    The Other Art Fair</a></p>
            </div>

        </footer>
    )
}

export default Footer

//<Link to='/about'>About</Link>