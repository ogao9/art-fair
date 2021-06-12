import React, { useState, useRef } from "react";
import {Link} from 'react-router-dom'
import Card from '../art-central/Card'


const DesignCategory = ({nextStep}) => {
    return (
        <div>
            <h1>Pick Your Category</h1>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}


const DesignDetails = ({ nextStep, prevStep, userInput, handleChange }) => {

    return (
        <form>
            <label for="title">
                Arrow Logo: Give your design a title <br />
                (creativity is encouraged)
            </label>
            <input
                id="title"
                type="text"
                placeholder="Enter Title Here"
                value={userInput.title}
                onChange={(e) => handleChange("title", e)}
                required
                maxLength="20"
            ></input>

            <label for="description">
                Arrow Logo: Give a brief description of your design
                <br />
                What's the motivation behind it and how should other people interpret it?
            </label>
            <input
                id="description"
                type="text"
                placeholder="Enter a Description"
                value={userInput.description}
                onChange={(e) => handleChange("description", e)}
            ></input>

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </form>
    );
};


const DesignConfirm = ({ nextStep, prevStep, handleSubmit, userInput }) => {
    const onSubmit = () => {
        //handleSubmit(); //userInput is already housed in UserForm.js
        nextStep();
    };

    return (
        <div>
            <h1>Preview</h1>
            <Card content={userInput} impactbtn={null}/>
           <button onClick={prevStep}>Back</button>
            <button onClick={onSubmit}>Submit</button> 
        </div>
        
    );
};


const DesignUpload = ({ nextStep, prevStep, handleChange, userInput }) => {
    const [ageError, setAgeError] = useState(false);

    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    const fileInput = useRef(null); //Refs provide a method to use DOM nodes (I'm assuming that's where files is)
    const [filename, setFileName] = useState(" No File Chosen");

    const handleUpload = (e) => {
        console.log(fileInput.current);
        setFileName(fileInput.current.files[0].name);
        handleChange(filename, e);
    };

    return (
        <form>
            <label for="file-upload">
                Upload an image of your design <br /> .png, .jpg, .svg accepted
            </label>
            <input type="file" id="file-upload" accept="image/png, image/jpeg" />

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </form>
    );
};


const DesignSuccess = ({prevStep}) => {
    
    return (
        <div className="Success-page">
            <h1><i class="fas fa-check-circle fa-9x" style={{"color":"green"}}></i></h1>
            <h1>Success!</h1> 
            <p>You have earned a contributor badge and your design should appear in your profile within minutes.</p>
            <button onClick={prevStep}>[Temporary] Back</button>
            <Link to='/Profile'><button>Go to Profile</button></Link>
        </div>
    )
}


export {DesignCategory, DesignDetails, DesignUpload, DesignConfirm, DesignSuccess};