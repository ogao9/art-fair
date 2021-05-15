import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from'@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Confirm = ({nextStep, prevStep, values}) => {

    const submitClicked = () => {
        //send data to db
        nextStep();
    }

    const backClicked = () => {
        prevStep();
    }

    return (
        <div className="flex-container">
            <div className="MultiForm">
                <Typography variant="h4" align='center'>Confirm</Typography>
                <div style={{textAlign:'center'}}>
                    <p><b>Title</b></p><br></br>
                    <p>{values.title}</p><br></br>

                    <p><b>Creator Name</b></p><br></br>
                    <p>{values.creator}</p><br></br>

                    <p><b>Description</b></p><br></br>
                    <p>{values.description}</p><br></br>
                </div>

                <div className="ButtonGroup">
                <ButtonGroup variant="outlined" style={{textAlign:'center', width:'80%', margin:'auto'}}>
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={backClicked}>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={submitClicked}>Submit</Button>
                </ButtonGroup>
                </div>
            </div>
            
            <div className="ButtonGroup">
            <ButtonGroup variant="outlined" style={{textAlign:'center', width:'80%', margin:'auto'}}>
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={prevStep}>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={nextStep}>Next</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}

export default Confirm
