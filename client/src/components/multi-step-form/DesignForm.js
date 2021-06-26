import React, { useState, useContext } from "react";
import { UserContext } from "../utilities/UserContext";
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
    const { user, setUser } = useContext(UserContext);
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    //Triggered when an input field on any of the steps changes
    const handleChange = (input_field, e) => {
        setUserInput({ ...userInput, [input_field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //1. Add New card to cards database
        const new_card_info = {
            title: userInput.title,
            description: userInput.description,
            category: userInput.category,
            creator: user.username,
        };
        const res = await cardServices.postCard(new_card_info);

        //2. Associate new card with current user
        if(res){
            const update_card_info = {
                userID: user._id,
                cardID: res._id,
            };
            const update = await userServices.addNewCard(update_card_info);
            if(update){
                setStep(5);
                setUser(update);
                setUserInput({});
            }    
        }else{
            alert("Something went wrong!")
        }
        
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
                    <DesignSuccess prevStep={prevStep} closebtn={closebtn} />
                </div>
            );
        default:
            return <h1>Oops! Something went wrong...</h1>;
    }
};

export default AddDesignForm;
