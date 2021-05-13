import React from 'react'
import Button from '@material-ui/core/Button';

const Success = ({prevStep}) => {
    return (
        <div className="flex-container">
        <div className="MultiForm">
            <h1>Success!</h1>
            <Button color="primary" onClick={prevStep}>Back</Button>
        </div>
        </div>
    )
}

export default Success
