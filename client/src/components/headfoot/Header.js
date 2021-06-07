import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo2 from '../../images/logo2.png'
import './Header.css'

const Header2 = () => {
    const [expand, setExpand] = useState(false);
    const expandedNav = (
        <nav className="expanded-nav">
            <Link to='/' className="nav-link">Home</Link> 
            <Link to='/' className="nav-link">Featured</Link> 
            <Link to='/ArtHome' className="nav-link">DesignCentral</Link> 
            <Link to='/About' className="nav-link">About</Link> 
            <Link to='/' className="nav-link">Docs</Link> 
            <Link to='/Login' className="nav-link">Login</Link> 
        </nav>
    );

    return (
        <div className="header">
            <nav className="nav-container">
                <div className="nav-start">
                    <a className="nav-link hamburger-menu" onClick={()=>setExpand(!expand)}><i class="fas fa-bars"></i></a>
                    <Link to='/' className="nav-link is-hidden-mobile">Home</Link>
                    <Link to='/' className="nav-link is-hidden-mobile">Feature</Link> 
                    <Link to='/ArtHome' className="nav-link is-hidden-mobile">DesignCentral</Link> 
                </div>
                <div className="nav-middle">
                    <img src={Logo2} alt="Logo"/>
                </div>
                <div className="nav-end">
                    <Link to='/About' className="nav-link">About</Link> 
                    <Link to='/' className="nav-link">Docs</Link> 
                    <Link to='/Login' className="nav-link">Login</Link> 
                </div>
            </nav>
            {expand ? expandedNav : null}
        </div>
    )
}

export default Header2
