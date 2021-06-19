import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../images/Logo.png'
import './Header.scss'

const ExpandedNav = () =>{
    return(
        <nav className="expanded-nav">
            <Link to='/' className="nav-link">Home</Link> 
            <NavLink to='/Feature' className="nav-link">Featured</NavLink> 
            <NavLink to='/DesignHome' className="nav-link">DesignHome</NavLink> 
            <NavLink to='/About' className="nav-link" >About</NavLink> 
            <NavLink to='/Forum' className="nav-link">Forum</NavLink> 
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
                    <NavLink to='/Feature' className="nav-link is-hidden-mobile">Featured</NavLink> 
                    <NavLink to='/DesignHome' className="nav-link is-hidden-mobile">DesignHome</NavLink> 
                </div>
                <div className="nav-middle">
                    <NavLink to='/'><img src={Logo} alt="Logo"/></NavLink>
                </div>
                <div className="nav-end">
                    <NavLink to='/About' className="nav-link is-hidden-mobile" activeClassName="active">About</NavLink> 
                    <NavLink to='/Forum' className="nav-link is-hidden-mobile">Forum</NavLink> 
                    <NavLink to='/Login' className="nav-link is-hidden-mobile">Login</NavLink> 
                </div>
            </nav>
            {expand ? <ExpandedNav/> : null}
        </div>
    )
}

export default Header
