import React from "react";
import { useState, useRef } from "react";

const UserFormDetails = ({ nextStep, prevStep, values, handleChange }) => {
    const [titleError, setTitleError] = useState(false);
    const [creatorError, setCreatorError] = useState(false);
    const [descrError, setDescrError] = useState(false);

    //Check For Empty Fields
    const onNext = () => {
        setTitleError(!values.title);
        setCreatorError(!values.creator);
        setDescrError(!values.description);

        if (values.title && values.creator && values.description) nextStep();
    };

    const handleNext = () => {
        nextStep();
    };

    //onchange vs onChange:  in React, onChange fires on each keystroke, not only on lost focus (which is when HTML fires)
    const [filename, setFileName] = useState(" No File Chosen");
    const fileInput = useRef(null); //Refs provide a method to use DOM nodes (I'm assuming that's where files is)

    const handleUpload = e => {
        console.log(fileInput.current);
        setFileName(fileInput.current.files[0].name);
        handleChange("filename", e);
    };

    return (
        <div className="form-container">
            <form>
                <label for="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter Title Here"
                    value={values.title}
                    onChange={e => handleChange("title", e)}
                ></input>
                <label for="creator">Creator</label>
                <input
                    id="creator"
                    type="text"
                    placeholder="Creator's name"
                    value={values.creator}
                    onChange={e => handleChange("creator", e)}
                ></input>
                <label for="description">Description</label>
                <input
                    id="description"
                    type="text"
                    placeholder="Enter a Description"
                    value={values.description}
                    onChange={e => handleChange("description", e)}
                ></input>

                <button onClick={prevStep} disabled>
                    Back
                </button>
                <button onClick={handleNext}>Next</button>
            </form>
        </div>
    );
};

export default UserFormDetails;

/*
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

    const useStyles = makeStyles(theme => ({
        root: {
            margin: theme.spacing(1),
            padding: "5px",
        },
        input: {
            display: "none",
        },
    }));
    const classes = useStyles();



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
                        onChange={(e) => handleUpload(e)}
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

*/
