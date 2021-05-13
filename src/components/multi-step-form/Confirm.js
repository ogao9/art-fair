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
        //display snackbar
        //clear values
        prevStep();
    }

    return (
        <div className="flex-container">
            <div className="MultiForm">
                <Typography variant="h4">Confirm</Typography>
                <div>
                    <h4>Title of Work: {values.hello} </h4>
                    <h4>Creator Name </h4>
                    <h4>Description</h4>
                    <h4>Uploaded File: </h4>
                    <h4>City of Origin: </h4>
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
