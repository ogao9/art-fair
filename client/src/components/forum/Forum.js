import React, {useContext} from 'react'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import './Forum.scss'
import { UserContext } from '../../UserContext';

const Forum = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <Header/>
            <div>
                {user}: <button onClick={()=>setUser("Bob")}>Set User</button>
            </div>
            <div className="forum-container">
                <h1>Coming Soon</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Forum 
