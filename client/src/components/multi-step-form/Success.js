import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const Success = ({prevStep}) => {
    
    return (
        <div className="flex-container">
            <div className="MultiForm">
                <Typography variant='h4' align='center'>Success!</Typography>
                <Typography variant='body1' align='center'>Your work has been submitted!</Typography>
                <Button color="primary" onClick={prevStep} variant='outlined'>[temp] Back</Button>
            </div>
        </div>
    )
}

export default Success
