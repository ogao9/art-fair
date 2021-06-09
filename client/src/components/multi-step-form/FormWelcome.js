import React, {useState} from "react";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import UserForm from "./UserForm";
import SampleCard from "./SampleCard";
import cardServices from "../../services/cardServices";
import userServices from "../../services/userServices"
import "./FormWelcome.css";


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
        <div><h1>You Need to Log In before submitting your work</h1></div>

    return (
        <div>
            <Header/>
            <div className="form-welcome">
                <div className="gradient-header">
                    <h1>Share Your Design</h1>
                </div>
                <div className="form-flex-container">
                    <div className="form-flex-left">
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
                    <div className="form-flex-right">
                        <SampleCard content={userInput} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FormWelcome;


