import React from "react";
import {useState} from 'react'
import UserForm from "./UserForm";
import SampleCard from "./SampleCard";
import cardServices from "../art-central/cardServices";
import userServices from "../../services/userServices"
import "./FormStyles.css";
import Header from '../Header'
import Footer from '../Footer'
import PreLogin from '../login/preLogin'

const FormWelcome = ({loginInfo}) => {
    const [userInput, setUserInput] = useState({}); //store all user input in an object

    //MODIFIES: userInput
    //EFFECTS: triggered when an input field on any of the connected forms changes
    //         input is the name of the field (title, creator, description)
    const handleChange = (input_field, e) => {
        setUserInput({ ...userInput, [input_field]: e.target.value });
    };

    //Add card to database AND insert new card's ID to user database
    const addCard = async() => {
        const new_card_info = {
            title: userInput.title,
            creator: userInput.creator,
            description: userInput.description,
            impact: 0,
            starred: false,
        };

        const res = await cardServices.postCard(new_card_info);
        //console.log(res);

        const update_card_info = {
            userID: loginInfo.id,
            cardID: res._id
        }
        console.log('Update Info', update_card_info)

        const update = await userServices.updateUser(update_card_info)

        //setUserInput({}); //reset values after submit
    };

    const LoginFlag = 
        <div><h1>You Need to Log In before submitting your work</h1><PreLogin/></div>

    return (
        <div>
            <Header/>
            <div className="form-welcome">
                <div className="gradient-header">
                    <h1>Show us what you got</h1>
                </div>
                <div className="flex-container1">
                    <div className="left-box1">
                        {
                            true
                            ? <UserForm
                            addbtn={addCard}
                            handleChange={handleChange}
                            userInput={userInput}
                        />
                        : LoginFlag
                        }
                        
                    </div>
                    <div className="right-box1">
                        <SampleCard content={userInput} />
                    </div>
                </div>
            </div>
            <Footer/>
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
