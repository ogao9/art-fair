import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    const [expand, setExpand] = useState(false);
    const expandedNav = (
        <nav className="expanded-nav">
            <Link to='/' className="nav-link">Home</Link> 
            <Link to='/Feature' className="nav-link">Feature</Link> 
            <Link to='/DesignHome' className="nav-link">DesignHome</Link> 
            <NavLink to='/About' className="nav-link" activeClassName="active">About</NavLink> 
            <Link to='/Profile' className="nav-link">Profile</Link> 
            <Link to='/Login' className="nav-link">Login</Link> 
        </nav>
    );

    return (
        <div className="header">
            <nav className="nav-container">
                <div className="nav-start">
                    <a className="nav-link hamburger-menu" onClick={()=>setExpand(!expand)}><i class="fas fa-bars"></i></a>
                    <Link to='/' className="nav-link is-hidden-mobile">Home</Link>
                    <Link to='/Feature' className="nav-link is-hidden-mobile">Feature</Link> 
                    <Link to='/DesignHome' className="nav-link is-hidden-mobile">DesignHome</Link> 
                </div>
                <div className="nav-middle">
                    <Link to='/'><img src={Logo} alt="Logo"/></Link>
                </div>
                <div className="nav-end">
                    <NavLink to='/About' className="nav-link" activeClassName="active">About</NavLink> 
                    <Link to='/Profile' className="nav-link">Profile</Link> 
                    <Link to='/Login' className="nav-link">Login</Link> 
                </div>
            </nav>
            {expand ? expandedNav : null}
        </div>
    )
}

export default Header
