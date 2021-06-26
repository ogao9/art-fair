import React, { useState, useContext, useEffect } from "react";
import { useClickOutside} from "../utilities/useClickOutside"
import { UserContext } from "../utilities/UserContext";
import userServices from "../../services/userServices";
import { CardImages } from "../../services/SampleData";
import LoginForm from "../login/LoginForm";
import './Card.scss'


function getImage(category){
    if(category)
        return CardImages.find(obj => obj.name === category).image;
    else    
        return null;
}

const Card = ({ content, children, config }) => {
    const {user, setUser} = useContext(UserContext);
    const loginRef = useClickOutside (()=>setShowLogin(false))

    const [showLogin, setShowLogin] = useState(false)
    const [saved, setSaved] = useState(false)
    const image = getImage(content.category)

    useEffect(()=>{
        if(user)
            setSaved( user.savedCards.includes(content._id))
    }, [user])

    async function handleSave() {
        if (user) {
            const cardToSave = {
                userID: user._id,
                cardID: content._id,
            };

            const saved = await userServices.saveCard(cardToSave);
            if(saved){
                setSaved(true); setUser(saved)
            }
            else
                alert("Failed to save card")
        } else {
            setShowLogin(true);
        }
    }

    function onLoginSuccess(){
        console.log("onLoginSuccess Called")
        setShowLogin(false);
        handleSave();
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

                {config==="slideshow" ? <p>{content.description}</p> : null}

                <div>
                    { saved
                    ? <p><i class="far fa-check-circle" /> Saved </p>  
                    : <button onClick={handleSave}><i class="far fa-plus-square"/> Save this Design </button>
                    }
                </div>

                {children}
            </div>

            <div className="show-login" ref={loginRef}>{showLogin && <LoginForm onLoginSuccess={onLoginSuccess}/>}</div>
        </>
    );
};

export default Card;

Card.defaultProps = {
    config: "gallery"
}
