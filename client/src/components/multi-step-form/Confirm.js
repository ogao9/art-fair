import React from "react";
import SampleCard from './SampleCard'

const Confirm = ({ nextStep, prevStep, handleSubmit, userInput }) => {
    const onSubmit = () => {
        //handleSubmit(); //userInput is already housed in UserForm.js
        nextStep();
    };

    return (
        <div>
            <h1>Preview</h1>
            <SampleCard content={userInput} impactbtn={null}/>
           <button onClick={prevStep}>Back</button>
            <button onClick={onSubmit}>Submit</button> 
        </div>
        
    );
};

export default Confirm;

