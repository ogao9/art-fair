import React, { useState, useRef, useContext, useEffect } from "react";
import userServices from "../../services/userServices";
import { UserContext } from "../../UserContext";
import LoginForm from "../login/LoginForm";
import { Categories } from "../../services/SampleData";
import './Card.scss'

const getImage = (category) =>{
    return Categories.find(obj => obj.name === category).image;
}


const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) handler();
        };
        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

const Card = ({ content, children }) => {
    const [showLogin, setShowLogin] = useState(false)
    const {user} = useContext(UserContext);
    const loginRef = useClickOutside (()=>setShowLogin(false))
    const image = getImage(content.category)

    async function handleSave(){
        if(user){
            const cardToSave = {
                userID: user._id,
                cardID: content._id,
            };
            const update = await userServices.saveCard(cardToSave);
            if(update)
                alert("card saved!")
            else
                console.log("Something went wrong saving your card");
        }
        else{
            setShowLogin(true);
        }
    }

    return (
        <>
            <div className="card">
                <img src={image} alt="Design"/>

                <div>
                    <div className="text-flex">
                        <h2>{content.title ? content.title : "Title"}</h2>
                    </div>
                    <div className="text-flex">
                        <p>{content.creator ? content.creator : "Username"}</p>
                        <span className="category-tag">{content.category ? content.category : "category"} </span>
                    </div>
                </div>

                <div>
                    <button onClick={handleSave}><i class="far fa-plus-square"/> Save this Design </button>
                </div>
                {children}
            </div>

            <div className="show-login" ref={loginRef}>{showLogin && <LoginForm/>}</div>
        </>
    );
};

export default Card;


