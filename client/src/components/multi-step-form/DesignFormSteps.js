import React, { useState, useRef } from "react";
import DarkLogo from "../../images/LogoDark.png"
import Card from '../design-home/Card'


const DesignCategory = ({nextStep, closebtn, userInput, handleChange}) => {
    return (
        <div className="flex-split">
            <div className="left-form">
                <div className="left-form-container">
                    <img src={DarkLogo} alt="logo"/>
                    <h1>Pick Your Category</h1>
                    <form>
                        <select value={userInput.category} onChange={(e)=>handleChange("category", e)} size={6}>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Digital">Digital</option>
                            <option value="Audio">Audio</option>
                            <option value="Minimal">Minimal</option>
                            <option value="Wilcard">Wildcard</option>
                        </select>
                    </form>
                    <button onClick={closebtn}>Close</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            </div>

            <div className="form-image"></div>
        </div>
    )
}


const DesignDetails = ({ nextStep, prevStep, userInput, handleChange }) => {
    return (
        <div className="flex-split">
            <div className="left-form">
                <div className="left-form-container">
                    <img src={DarkLogo} alt="logo"/>
                    <form>
                        <label htmlFor="title">
                            <i class="fas fa-angle-double-right"/>Give your design a title
                            (creativity is encouraged)
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={userInput.title}
                            onChange={(e) => handleChange("title", e)}
                            maxLength="20"
                            required
                        ></input>

                        <label htmlFor="description">
                            <i class="fas fa-angle-double-right"/>Give a brief description of your design
                            <br />
                            What's the motivation behind it and how should other people interpret it?
                        </label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={userInput.description}
                            onChange={(e) => handleChange("description", e)}
                            required
                        ></input>
                    </form>
                    <button onClick={prevStep}>Back</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            </div>

            <div className="form-image"></div>
        </div>
    );
};

const DesignUpload = ({ nextStep, prevStep, handleChange, userInput }) => {
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    const fileInput = useRef(null); 
    const [filename, setFileName] = useState(" No File Chosen");

    const handleUpload = (e) => {
        console.log(fileInput.current);
        setFileName(fileInput.current.files[0].name);
        handleChange(filename, e);
    };

    return (
        <div className="flex-split">
            <div className="left-form">
                <div className="left-form-container">
                    <img src={DarkLogo} alt="logo"/>
                    <form>      
                        <label htmlFor="file-upload">
                            Upload an image of your design <br /> .png, .jpg, .svg accepted
                        </label>
                        <input type="file" id="file-upload" accept="image/png, image/jpeg" />
                    </form>

                    <button onClick={prevStep}>Back</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            </div>

            <div className="form-image"></div>
        </div>
    );
};


const DesignConfirm = ({ prevStep, handleSubmit, userInput }) => {

    return (
        <div className="flex-split">
            <div className="left-form">
                <div className="left-form-container">
                    <h1>Preview</h1>
                    <Card content={userInput}/> 
                    <button onClick={prevStep}>Back</button>
                    <button onClick={(e)=> handleSubmit(e)}>Submit</button> 
                </div>
            </div>
            <div className="form-image"></div>
        </div>
    );
};


const DesignSuccess = ({prevStep, closebtn}) => {
    
    return (
        <div className="flex-split">
            <div className="left-form">
                <div className="left-form-container success-page">
                    <h1><i class="fas fa-check-circle fa-5x" style={{"color":"green"}}></i></h1>
                    <h1>Success!</h1> 
                    <p>You have earned a contributor badge and your design should appear in your profile within minutes.</p>
                    <button onClick={prevStep}>[Temporary] Back</button>
                    <button onClick={closebtn}>Done!</button>
                </div>
            </div>
            <div className="form-image"></div>
        </div>
    )
}


export {DesignCategory, DesignDetails, DesignUpload, DesignConfirm, DesignSuccess};