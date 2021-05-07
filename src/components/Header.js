import Logo2 from '../images/logo2.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <ul className="Navbar">
                <li><Link to='/'><img src={Logo2}></img></Link></li>
                <li><Link to='/' className="RouterLink">Home</Link></li>
                <li><Link to='/About' className="RouterLink">About</Link></li>
                <li><Link to='/ArtDisplay' className="RouterLink">Art Central</Link></li>
                <li><Link to='/Admin' className="RouterLink">Admin</Link></li>
            </ul>
        </div>
    )
}

export default Header


//<li><a href='/ArtDisplay' className="RouterLink">Art Central</a></li>