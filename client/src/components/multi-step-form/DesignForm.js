import React, { useState, useContext } from "react";
import { UserContext } from "../utilities/UserContext";
import cardServices from "../../services/cardServices";
import userServices from "../../services/userServices";
import { DesignCategory, DesignDetails, DesignUpload, DesignConfirm, DesignSuccess} from "./DesignFormSteps";
import "./DesignForm.scss";


const AddDesignForm = ({ closebtn }) => {
    const { user, setUser } = useContext(UserContext);
    const [userInput, setUserInput] = useState({"category":"Indoor", "creator": user.username}); 
    const [step, setStep] = useState(1);

    const nextStep = (e) => {
        e.preventDefault();
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
        const new_card_info = {
            title: userInput.title,
            description: userInput.description,
            category: userInput.category,
            creator: userInput.creator,
            image: userInput.image
        };
        const res = await cardServices.postCard(new_card_info);

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
                <DesignCategory
                    closebtn={closebtn}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    userInput={userInput}
                />
            );
        case 2:
            return (
                <DesignDetails
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    userInput={userInput}
                />
            );
        case 3:
            return (
                <DesignUpload
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    userInput={userInput}
                />
            );
        case 4:
            return (
                <DesignConfirm
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleSubmit={handleSubmit}
                    userInput={userInput}
                />
            );
        case 5:
            return (
                <DesignSuccess 
                    prevStep={prevStep} 
                    closebtn={closebtn} 
                />
            );
        default:
            return <h1>Oops! Something went wrong...</h1>;
    }
};

export default AddDesignForm;
