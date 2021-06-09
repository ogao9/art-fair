import React, { useState, useRef } from "react";

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
            <h2>Submit Your Work Here!</h2>
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


