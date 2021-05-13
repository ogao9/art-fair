import React from 'react'
import {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from'@material-ui/core/Typography'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const UserFormDetails = ({nextStep, prevStep, values, handleChange}) => {
    const [error, setError] = useState(false);

    const onNext= () =>{
        if(!values.creator){
            setError(true);
        }else{
            nextStep();
        }


    }



    //---Material UI Styles ---
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(1),
            padding: '5px',
           
        },
        input:{
            display: 'none',
        }
        }));
    const classes = useStyles();

    //we are going to fire off an event onChange

    return (
    <div className="flex-container">
        <div className="MultiForm">
            <form className={classes.root} noValidate autoComplete="off">
                <h3>Page 1 - Tell us about your work</h3>
                <TextField 
                    variant="filled" 
                    label="Title of Work" 
                    margin="normal"
                    value={values.title} 
                    onChange={(e) => handleChange('title',e)}
                />
                <TextField 
                    error={error}
                    variant="filled"
                    label="Creator Name" 
                    margin='normal'
                    value={values.creator} 
                    onChange={(e) => handleChange('creator',e)}
                />
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin='normal'
                    value={values.description}
                    onChange={(e) => handleChange('description',e)}
                />
                <div>
                    <input
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">Choose File</Button>
                    </label>
                </div>
                <ButtonGroup variant="outlined" style={{marginTop:'1vw'}}>
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={prevStep} disabled>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={onNext}>Next</Button>
                </ButtonGroup>
            </form>
            
        </div>
    </div>
    )
}

export default UserFormDetails
