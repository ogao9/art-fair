import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../utilities/UserContext";
import { Categories, DefaultImg } from "../../services/SampleData";
import userServices from "../../services/userServices";
import LoginPortal from "./LoginPortal";
import './Card.scss'

const Card = ({ content, children, config, setPause, saveButton }) => {
    const {user, setUser} = useContext(UserContext);
    const [showLogin, setShowLogin] = useState(false)
    const [saved, setSaved] = useState(false)

    const image = getImage(content)
    const fallbackImg = content.category ? Categories.find(obj => obj.name === content.category).image : DefaultImg;

    useEffect(()=>{
        if(user)
            setSaved(user.savedCards.includes(content._id))
    },[user])

    async function handleSave() {
        setPause && setPause(); //pause the slideshow, if necessary
        if (user) {
            const cardToSave = {
                userID: user._id,
                cardID: content._id,
            };
            const saved = await userServices.saveCard(cardToSave);

            if (saved) setUser(saved);
            else alert("Failed to save card");
        } else {
            setShowLogin(true);
        }
    }

    const onLoginSuccess = async ()=>{
        //handleSave(); This should work, but user is still null after login for some reason
        setShowLogin(false);
    }

    return (
        <>
            <div className="card">
                <img src={image} alt="Design" onError={(e)=>{e.target.onError = null; e.target.src = fallbackImg}} />

                <div>
                    <div className="text-flex">
                        <h2>{content.title ? content.title : "Title"}</h2>
                    </div>
                    <div className="text-flex">
                        <p>{content.creator ? content.creator : "Username"}</p>
                        <span className="category-tag">{content.category ? content.category : "category"} </span>
                    </div>
                </div>

                {config==="slideshow" ? 
                    <div>
                        <h3>A note from the creator</h3>
                        <p>{content.description}</p> 
                    </div>
                : null}

                {saveButton ?
                    <div>
                        { saved ?
                            <p><i class="far fa-check-circle" /> Saved </p>  
                            : <button onClick={handleSave}><i class="far fa-plus-square"/> Save this Design </button>}
                    </div>
                : null}
                
                {children}
            </div>
            
            { showLogin && <LoginPortal onLoginSuccess={onLoginSuccess} setShowLogin={setShowLogin}/>}
        </>
    );
};

export default Card;

Card.defaultProps = {
    config: "gallery",
    saveButton: true,
    setPause: null,
}


function getImage(content){
    if(content.image) return content.image;
    
    if(content.category) return Categories.find(obj => obj.name === content.category).image;
    else return DefaultImg;
}