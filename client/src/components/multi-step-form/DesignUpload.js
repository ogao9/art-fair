import React, { useState, useRef } from "react";

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

export default DesignUpload;
