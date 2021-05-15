import React from 'react'
import {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from'@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const PersonalData = ({nextStep, prevStep, handleChange, values}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        formControl: {
            display: 'block'
        },
        }));
    const classes = useStyles();


    return (
    <div className="flex-container">
        <div className="MultiForm">
            <h3>Page 2 - Tell us about yourself</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                        error={false}
                        variant="filled" 
                        label="Your Age" 
                        margin="normal"
                        value={values.age} 
                        onChange={(e) => handleChange('age',e)}
                />
                <TextField 
                        error={false}
                        variant="filled"
                        label="City of Origin" 
                        margin='normal'
                        value={values.city} 
                        onChange={(e) => handleChange('city',e)}
                />
                <InputLabel id="experience-class">Experience Class</InputLabel>
                <Select
                    labelId="experience-class"
                    variant="outlined"
                    autoWidth
                    value={values.experience} 
                    onChange={(e) => handleChange('experience',e)}
                >
                    <MenuItem value={'Junior'}>Junior</MenuItem>
                    <MenuItem value={'Senior'}>Senior</MenuItem>
                    <MenuItem value={'Pro'}>Pro</MenuItem>
                </Select>
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
