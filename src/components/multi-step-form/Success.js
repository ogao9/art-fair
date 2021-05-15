import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const Success = ({prevStep}) => {
    
    return (
        <div className="flex-container">
            <div className="MultiForm">
                <Typography variant='h4' align='center'>Success!</Typography>
                <Button color="primary" onClick={prevStep} variant='outlined'>Back</Button>
            </div>
        </div>
    )
}

export default Success
