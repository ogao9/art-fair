import React, { useState, useContext, useEffect } from "react";
import { useClickOutside} from "../utilities/useClickOutside"
import { UserContext } from "../utilities/UserContext";
import userServices from "../../services/userServices";
import { CardImages, DefaultImg } from "../../services/SampleData";
import LoginForm from "../login/LoginForm";
import './Card.scss'


function getImage(content){
    if(content.image){
        return content.image;
    }
    else if(content.category)
        return CardImages.find(obj => obj.name === content.category).image;
    else    
        return DefaultImg;
}

const Card = ({ content, children, config, setPause, saveButton }) => {
    const {user, setUser} = useContext(UserContext);
    const loginRef = useClickOutside (()=>setShowLogin(false))

    const [showLogin, setShowLogin] = useState(false)
    const [saved, setSaved] = useState(false)
    const image = getImage(content)

    useEffect(()=>{
        if(user)
            setSaved( user.savedCards.includes(content._id))
    },[user])

    async function handleSave() {
        setPause && setPause(); //pause the slideshow
        if (user) {
            const cardToSave = {
                userID: user._id,
                cardID: content._id,
            };

            const saved = await userServices.saveCard(cardToSave);
            if(saved){
                setUser(saved); console.log("save card Success!")
            }
            else
                alert("Failed to save card")
        } else {
            setShowLogin(true); console.log("user not logged in")
        }
        console.log("handleSave Finished")
    }

    const onLoginSuccess = async ()=>{
        //console.log(user);
       // await handleSave(); This should work, but user is null after login for some reason
        setShowLogin(false);
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

                {config==="slideshow" ? 
                <div>
                    <h3>A note from the creator</h3>
                    <p>{content.description}</p> 
                </div>
                : null}

                {saveButton ?
                    <div>
                    { saved
                    ? <p><i class="far fa-check-circle" /> Saved </p>  
                    : <button onClick={handleSave}><i class="far fa-plus-square"/> Save this Design </button>
                    }
                    </div>
                :null}
                

                {children}
            </div>
            
            { showLogin &&
            <div className="show-login-container">
                <div className="show-login" ref={loginRef}> <LoginForm onLoginSuccess={onLoginSuccess}/></div>
            </div>
            }
        </>
    );
};

export default Card;

Card.defaultProps = {
    config: "gallery",
    saveButton: "True",
    setPause: null,
}
