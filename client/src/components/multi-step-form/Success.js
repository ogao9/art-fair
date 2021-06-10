import React from 'react'
import {Link} from 'react-router-dom'

const Success = ({prevStep}) => {
    
    return (
        <div className="Success-page">
            <h1><i class="fas fa-check-circle fa-9x" style={{"color":"green"}}></i></h1>
            <h1>Success!</h1> 
            <p>You have earned a contributor badge and your design should appear in your profile within minutes.</p>
            <button onClick={prevStep}>[Temporary] Back</button>
            <button><Link to='/Profile'/>Go to Profile</button>
        </div>
    )
}

export default Success
