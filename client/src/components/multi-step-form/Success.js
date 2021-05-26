import React from 'react'
import Button from '@material-ui/core/Button';

const Success = ({prevStep}) => {
    
    return (
        <div className="form-container">
            <h1>Submission Success!</h1> <br></br>
            <p>You have earned a contributor badge</p>
            <Button color="primary" onClick={prevStep}>Back</Button>
        </div>
    )
}

export default Success
