import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import cardServices from "../../services/cardServices";
import userServices from "../../services/userServices";
import {
    DesignCategory,
    DesignDetails,
    DesignUpload,
    DesignConfirm,
    DesignSuccess,
} from "./DesignFormSteps";
import "./DesignForm.scss";

//-----Parent container for the form Wizard -----
const AddDesignForm = ({ closebtn }) => {
    const [userInput, setUserInput] = useState({}); //store all user input in an object
    const { user } = useContext(UserContext);
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    //EFFECTS: triggered when an input field on any of the steps changes
    //         input is the name of the field (title, description, category)
    const handleChange = (input_field, e) => {
        setUserInput({ ...userInput, [input_field]: e.target.value });
    };

    const handleSubmit = async () => {
        //1. Add New card to cards database
        const new_card_info = {
            title: userInput.title,
            description: userInput.description,
            category: userInput.category,
            creator: user.username,
        };
        const res = await cardServices.postCard(new_card_info);

        //2. Associate new card with current user
        const update_card_info = {
            userID: user._id,
            cardID: res._id,
        };
        console.log("Update Info", update_card_info);
        const update = await userServices.updateUser(update_card_info);

        //3. Reset Form Values
        setUserInput({});
    };

    switch (step) {
        case 1:
            return (
                <div className="form-container">
                    <DesignCategory
                        nextStep={nextStep}
                        closebtn={closebtn}
                        handleChange={handleChange}
                        userInput={userInput}
                    />
                </div>
            );
        case 2:
            return (
                <div className="form-container">
                    <DesignDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
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
        case 5:
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
        case 4:
            return (
                <div className="form-container">
                    <DesignSuccess prevStep={prevStep} closebtn={closebtn} />
                </div>
            );
        default:
            return <h1>Oops! Something went wrong...</h1>;
    }
};

export default AddDesignForm;
