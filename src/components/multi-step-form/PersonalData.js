import React from 'react'
import {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from'@material-ui/core/Typography'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const PersonalData = ({nextStep, prevStep, handleChange, values}) => {
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [occupation, setOccupation] = useState('');

    //---Material UI Styles ---
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        }));
    const classes = useStyles();

    return (
    <div className="flex-container">
        <div className="MultiForm">
            <h3>Page 2 - Tell us about yourself</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="City of Origin" value={city}/>
                <TextField id="standard-basic" label="Age" value={age}/>
                <TextField id="standard-basic" label="Occupation" value={occupation}/>
            </form>
            <div className="ButtonGroup">
            <ButtonGroup variant="outlined" style={{textAlign:'center', width:'80%', margin:'auto'}}>
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={prevStep}>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={nextStep}>Next</Button>
            </ButtonGroup>
            </div>
        </div>
    </div>
    )
}

export default PersonalData
