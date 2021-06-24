import React, {useState, useRef, useEffect, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { UserContext } from '../../UserContext';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../images/Logo.png'
import './Header.scss'


const ExpandedNav = () =>{
    return(
        <nav className="expanded-nav">
            <Link to='/' className="nav-link">Home</Link> 
            <NavLink to='/Featured' className="nav-link">Featured</NavLink> 
            <NavLink to='/Gallery' className="nav-link">Gallery</NavLink> 
            <NavLink to='/About' className="nav-link">About</NavLink> 
            <NavLink to='/Forum' className="nav-link">Forum</NavLink> 
        </nav>
    )
}

const useClickOutside = (handler) =>{
    const domNode = useRef();

    useEffect(()=>{
        let maybeHandler = (event) =>{
            if(domNode.current && !domNode.current.contains(event.target))
                handler();
        }
        document.addEventListener("mousedown", maybeHandler)

        return ()=>{
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode;
}

const AvatarDropdown = ({username, setUser}) =>{
    const [open, setOpen] = useState(false);
    const menuRef = useClickOutside(()=>{setOpen(false)})

    const handleLogout = ()=>{
        setUser(null);
    }

    return(
        <div className="dropdown">
            <Avatar className="top-avatar" onClick={()=>{setOpen(!open)}}>{username[0].toUpperCase()}</Avatar>
            {open && 
            <div className="menu" ref={menuRef}>
                <Avatar className="avatar">{username[0]}</Avatar>
                <p>{username}</p>

                <Link to='/Profile' className="profile-link"><button className="profile-btn"><i class="far fa-user fa-lg"/>My Profile</button></Link>
                <button className="log-out" onClick={handleLogout}><i class="fas fa-sign-out-alt fa-lg"/>Log Out</button>
            </div>
            }
        </div>
    ) 
}

const Header = () => {
    const [expand, setExpand] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const loggedIn = user ? true : false;
    const username = user ? user.username : "";
    
    return (
        <div className="header-container">
            <nav className="nav-container">
                <div className="nav-start">
                    <a className="nav-link hamburger-menu" onClick={()=>setExpand(!expand)}><i class="fas fa-bars"></i></a>
                    <Link to='/' className="nav-link is-hidden-mobile">Home</Link>
                    <NavLink to='/Featured' className="nav-link is-hidden-mobile">Featured</NavLink> 
                    <NavLink to='/Gallery' className="nav-link is-hidden-mobile">Gallery</NavLink> 
                </div>
                <div className="nav-middle">
                    <NavLink to='/'><img src={Logo} alt="Logo"/></NavLink>
                </div>
                <div className="nav-end">
                    <NavLink to='/About' className="nav-link is-hidden-mobile" activeClassName="active">About</NavLink> 
                    <NavLink to='/Forum' className="nav-link is-hidden-mobile">Forum</NavLink> 
                    {loggedIn ? <AvatarDropdown username={username} setUser={setUser} />
                    : <NavLink to='/Login' className="nav-link login">Log In</NavLink> 
                    }
                    
                </div>
            </nav>
            {expand ? <ExpandedNav/> : null}
        </div>
    )
}

export default Header
