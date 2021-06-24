import React, { useState, useRef } from "react";
import DarkLogo from "../../images/LogoDark.png"
import Card from '../design-home/Card'


const DesignCategory = ({nextStep, closebtn, userInput, handleChange}) => {

    return (
        <div className="flex-split">
            <div className="left-form">
                <div>
                    <img src={DarkLogo} alt="logo"/>
                    <h1>Pick Your Category</h1>
                    <form>
                        <select value={userInput.category} onChange={(e)=>handleChange("category", e)}>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Digital">Indoor</option>
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
                
                <div>
                <img src={DarkLogo} alt="logo"/>
                <form>
                    <label htmlFor="title">
                        Arrow Logo: Give your design a title <br />
                        (creativity is encouraged)
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={userInput.title}
                        onChange={(e) => handleChange("title", e)}
                        maxLength="20"
                    ></input>

                    <label htmlFor="description">
                        Arrow Logo: Give a brief description of your design
                        <br />
                        What's the motivation behind it and how should other people interpret it?
                    </label>
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={userInput.description}
                        onChange={(e) => handleChange("description", e)}
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
                <div>
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




const DesignSuccess = ({prevStep, closebtn, handleSubmit}) => {
    
    return (
        <div className="flex-split">
        <div className="left-form">
            <div className="success-page">
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