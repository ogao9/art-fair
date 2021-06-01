import React from 'react'
import Button from '@material-ui/core/Button';

const Success = ({prevStep}) => {
    
    return (
        <div className="form-container">
            <div className="Success">
                <h1>Submission Success!</h1> <br></br>
                <p>You have earned a contributor badge</p>
                <Button color="primary" onClick={prevStep}>Back</Button>
            </div>
        </div>
    )
}

export default Success
