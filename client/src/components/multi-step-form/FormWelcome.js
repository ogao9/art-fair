import React from "react";
import {useState} from 'react'
import UserForm from "./UserForm";
import SampleCard from "./SampleCard";
import cardServices from "../art-central/cardServices";
import "./FormStyles.css";

const FormWelcome = () => {
    const [userInput, setUserInput] = useState({}); //store all user input in an object

    //MODIFIES: userInput
    //EFFECTS: triggered when an input field on any of the connected forms changes
    //         input is the name of the field (title, creator, description)
    const handleChange = (input_field, e) => {
        setUserInput({ ...userInput, [input_field]: e.target.value });
    };

    //Adds card to database
    const addCard = () => {
        const new_card_info = {
            title: userInput.title,
            creator: userInput.creator,
            description: userInput.description,
            impact: 0,
            starred: false,
        };
        cardServices.postCard(new_card_info);
        setUserInput({}); //reset values after submit
    };

    return (
        <div className="form-welcome">
            <div className="gradient-header">
                <h1>Show us what you got</h1>
            </div>
            <div className="flex-container1">
                <div className="left-box1">
                    <UserForm
                        addbtn={addCard}
                        handleChange={handleChange}
                        userInput={userInput}
                    />
                </div>
                <div className="right-box1">
                    <SampleCard content={userInput} />
                </div>
            </div>
        </div>
    );
};

export default FormWelcome;

/* 
<div className="form-welcome">
            <div className="gradient-header">
                <h1>Show us what you got</h1>
            </div>
            <div className='flex-container1'>
                <UserForm addbtn={addCard}/>
                <SampleCard content={sampleContent}/>
            </div>
        </div>


        
        //EFFECTS: Adds a new card to db 
        const onAdd = () => {
            const cardfrac = {
                title: userInput.title,
                creator: userInput.creator,
                description: userInput.description,
                impact:0,
                starred:false,
            }
            
            addbtn(cardfrac)
            setUserInput({}); //reset values after submit
        }


            const sampleContent = {
        title: "Hello",
        creator: "HelloCreator",
        description: "Hello Descr",
        impact: 2,
        _id: "65",
    };
*/
