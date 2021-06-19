import React, { useState } from "react";
import cardServices from "../../services/cardServices";
import userServices from "../../services/userServices";
import {DesignCategory, DesignDetails, DesignUpload, DesignConfirm, DesignSuccess} from './DesignFormSteps'
import './DesignForm.scss'

//-----Parent container for the form Wizard -----
//      **--Ideally, the form can stand alone and serve as a pop-up on any page**
const UserForm = ({ loginInfo, closebtn }) => {
    const [userInput, setUserInput] = useState({}); //store all user input in an object
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    //EFFECTS: triggered when an input field on any of the steps changes
    //         input is the name of the field (title, creator, description)
    const handleChange = (input_field, e) => {
        setUserInput({ ...userInput, [input_field]: e.target.value });
    };

    const handleSubmit = async () => {
        //1. Add New card to cards database
        const new_card_info = {
            title: userInput.title,
            creator: 'should be username here',
            description: userInput.description,
            impact: 0,
            starred: false,
        };
        const res = await cardServices.postCard(new_card_info);

        //2. Associate new card with current user
        const update_card_info = {
            userID: loginInfo.id,
            cardID: res._id,
        };
        console.log("Update Info", update_card_info);
        const update = await userServices.updateUser(update_card_info);

        //3. Reset Form Values
        //setUserInput({}); //reset values after submit
    };

    switch (step) {
        case 1:
            return(
                <div className="form-container">
                    <DesignCategory nextStep={nextStep} closebtn={closebtn}/>
                </div>
            )
        case 2:
            return (
                <div className="form-container">
                    <DesignDetails
                        nextStep={nextStep}
                        handleChange={handleChange}
                        userInput={userInput}
                    />
                </div>
            );
        case 3:
            return (
                <div className="form-container">
                    <DesignUpload
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        userInput={userInput}
                    />
                </div>
            );
        case 4:
            return (
                <div className="form-container">
                    <DesignConfirm
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleSubmit={handleSubmit}
                        userInput={userInput}
                    />
                </div>
            );
        case 5:
            return (
                <div className="form-container">
                    <DesignSuccess prevStep={prevStep} />
                </div>
            );
        default:
            return <h1>Oops! Something went wrong...</h1>;
    }
};

export default UserForm;
