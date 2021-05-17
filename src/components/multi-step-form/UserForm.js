import React from 'react'
import {useState, useEffect} from 'react'

import UserFormDetails from './UserFormDetails'
import PersonalData from './PersonalData'
import Confirm from './Confirm'
import Success from './Success'


const UserForm = () => {

    //Multi-Step Form Controls
    const [step, setStep] = useState(1);
    const [userInput, setUserInput] = useState({}); //store all user input in an object

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    //MODIFIES: userInput
    //EFFECTS: triggered when an input field on any of the connected forms changes
    const handleChange = (input, e) => {
        setUserInput({...userInput, [input]: e.target.value});
    }


    //EFFECTS: Adds a new card to db 
    const addbtn = async() => {
        const new_card_info = userInput;

        const fetchDetails = {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(new_card_info) //stringify converts an object to a JSON string (the format we want)
        }
        const response = await fetch('http://localhost:5000/works', fetchDetails);

        setUserInput({}); //reset values after submit
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
                    addbtn = {addbtn}
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
        //used this when we needed to updata a local array 
        //const data = await response.json(); //set data to the card we just created
        // setArtInfo([...artInfo, data]);  
*/