import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../images/Logo.png'
import './Header.scss'

const ExpandedNav = () =>{
    return(
        <nav className="expanded-nav">
            <NavLink to='/' className="nav-link" activeClassName="active">Home</NavLink> 
            <NavLink to='/Feature' className="nav-link">Feature</NavLink> 
            <NavLink to='/DesignHome' className="nav-link">DesignHome</NavLink> 
            <NavLink to='/About' className="nav-link" >About</NavLink> 
            <NavLink to='/Profile' className="nav-link">Profile</NavLink> 
            <NavLink to='/Login' className="nav-link">Login</NavLink> 
        </nav>
    )
}

const Header = () => {
    const [expand, setExpand] = useState(false);
    
    
    return (
        <div className="header-container">
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
            {expand ? <ExpandedNav/> : null}
        </div>
    )
}

export default Header
