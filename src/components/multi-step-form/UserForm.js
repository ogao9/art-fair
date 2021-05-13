import React from 'react'
import {useState} from 'react'
import UserFormDetails from './UserFormDetails'
import PersonalData from './PersonalData'
import Confirm from './Confirm'
import Success from './Success'


const UserForm = () => {
    const [step, setStep] = useState(1);
    const [userInput, setUserInput] = useState({}); //store all user info in an object

    const nextStep = () => {
        setStep(step+1)
    }

    const prevStep = () => {
        setStep(step-1)
    }


    //MODIFIES: userInput
    //EFFECTS: triggered when an input field changes
    const handleChange = (input, e) => {
        setUserInput({...userInput, [input]: e.target.value});
    }

    switch(step){
        case 1:
            return <UserFormDetails 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                    />;
        case 2:
            return <PersonalData
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                    />;
        case 3:
            return <Confirm
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                    />;
        case 4:
            return <Success
                    prevStep={prevStep}
                    />;
        default:
            return <h1>Oops! Something went wrong...</h1>
    }

}

export default UserForm


    /*
    const [firstName ]
    const [lastName]
    const [email]
    const [city, setCity]
    const [bio, setBio]
    */