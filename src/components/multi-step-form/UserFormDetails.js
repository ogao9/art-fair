import React from 'react'
import {useState, useRef} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from'@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const UserFormDetails = ({nextStep, prevStep, values, handleChange}) => {
    const [titleError, setTitleError] = useState(false);
    const [creatorError, setCreatorError] = useState(false);
    const [descrError, setDescrError] = useState(false);

    //Check For Empty Fields
    const onNext = () =>{
        setTitleError(!values.title);
        setCreatorError(!values.creator);
        setDescrError(!values.description);

        if(values.title && values.creator && values.description)
            nextStep();
    }


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


    //Handling file upload: Doesn't work right now
    const [filename, setFileName] = useState(" No File Chosen");
    const fileInput = useRef(null); //Refs provide a method to use DOM nodes (I'm assuming that's where files is)

    const handleUpload = () => {
        setFileName(fileInput.files[0].name);
    }


    return (
    <div className="flex-container">
        <div className="MultiForm">
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="h5" align="center">Submission Details</Typography>
                <TextField 
                    error={titleError}
                    variant="filled" 
                    label="Title of Work" 
                    margin="normal"
                    value={values.title} 
                    onChange={(e) => handleChange('title',e)}
                />
                <TextField 
                    error={creatorError}
                    variant="filled"
                    label="Creator Name" 
                    margin='normal'
                    value={values.creator} 
                    onChange={(e) => handleChange('creator',e)}
                />
                <TextField
                    error={descrError}
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
                        id="upload-file"
                        type="file"
                        onchange={handleUpload}
                        ref={fileInput}
                    />
                    <label htmlFor="upload-file">
                        <Button variant="contained" color="primary" component="span">Choose File</Button>
                        <span>{filename}</span>
                    </label>
                </div>
            </form>
        </div>

        <div className="ButtonGroup">
            <ButtonGroup variant="outlined">
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" disabled>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={onNext}>Next</Button>
            </ButtonGroup>
        </div>
    </div>
    )
}

export default UserFormDetails
