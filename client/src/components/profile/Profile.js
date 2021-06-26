import React, { useState, useContext, useEffect }  from "react";
import { UserContext } from "../utilities/UserContext";
import userServices from "../../services/userServices";
import cardServices from "../../services/cardServices";
import Loading from "../utilities/Loading"
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import GalleryDisplay from "../design-home/GalleryDisplay";
import DesignForm from "../multi-step-form/DesignForm"
import "./Profile.scss";

const Badges = ["Design Novice", "Contributor"]

const Profile = () => {
    const {user} = useContext(UserContext);
    const [yourCards, setYourCards] = useState([]);
    const [savedCards, setSavedCards] = useState([]);
    const [aboutInfo, setAboutInfo] = useState({})
    const [showForm, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getCards = async ()=>{
            setLoading(true);
            const yourData = await cardServices.getYourCards(user._id)
            const savedData = await cardServices.getSavedCards(user._id)
            setYourCards(yourData);
            setSavedCards(savedData);
            setAboutInfo({_id:user._id, location: user.location, designInterests: user.designInterests, favQuote: user.favQuote});
        }
        getCards();
        setLoading(false);
    }, [user])

    const removeYourCard = async (cardID)=>{
        const res = await cardServices.deleteCard(cardID)
        if(res){
            alert("Card Deleted")
        }
        else
            alert("Something went wrong!")
    }

    const removeSavedCard = async(cardID) =>{
        const info = {userID: user._id, cardID}
        const res = await userServices.removeSavedCard(info)

        if(res){
            alert("saved card removed")
        }
        else
            alert("Bad")
    }
    
    if(loading)
        return <Loading/>
    return (
        <>
            <Header />
            <div className="profile-container">
                <div className={`profile-left ${showForm ? "form-active" : null}`}>
                    <div className="profile-header">
                        <div className="avatar">{user ? user.username[0] : "O"}</div>
                        <h2>{user ? user.username : "Username"}</h2>
                        <p>{user ? user.email : "Email"}</p>
                    </div>
                    <hr />
                    <ProfileAbout aboutInfo={aboutInfo} setAboutInfo={setAboutInfo}/>
                </div>
                
                <div className={`profile-right ${showForm ? "form-active" : null}`}>
                    <section className="right-item">
                        <h2>Badges</h2>
                        <div className="badge-container">
                            {Badges.map((str, idx) => (
                                <div key={idx}>
                                    <i class="fab fa-creative-commons-share fa-5x"/>
                                    <p>{str}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="right-item">
                        <div className="your-designs">
                            <h2>Your Designs</h2>
                            <button onClick={()=>setShow(true)}>Share a Design</button>
                        </div>
                        {yourCards.length
                        ? <GalleryDisplay cardsPerPage={3} galleryData={yourCards} handleRemove={removeYourCard}/>
                        : null
                        }
                    </section>

                    <section className="right-item">
                        <h2>Saved Designs</h2>
                        <GalleryDisplay cardsPerPage={3} galleryData={savedCards} handleRemove={removeSavedCard}/>
                    </section>

                    <section className="right-item">
                        <h2>Activity Log</h2>
                        <p>Coming Soon</p>
                    </section>
                </div>

                <div className="design-form">
                    {showForm ? <DesignForm closebtn={() => setShow(false)} /> : null}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;


const ProfileAbout = ({ aboutInfo, setAboutInfo}) => {
    const {user, setUser} = useContext(UserContext);
    const [showEdit, setEdit] = useState(false);

    const handleChange = (input_field, e) =>{
        setAboutInfo({...aboutInfo, [input_field]: e.target.value })
    }

    const onAboutSubmit = async (e)=>{
        e.preventDefault();

        const res = await userServices.updatePersonalInfo(aboutInfo)
        if(res)
            setUser(res);
        else   
            alert("Something went wrong!")
        setEdit(false);
    }

    return (
        <div className="profile-about">
            <div className="profile-edit">
                <h2>About</h2>
                <button onClick={() => setEdit(!showEdit)}>
                    <i class="fas fa-pen"></i>Edit
                </button>
            </div>

            {showEdit ? (
                <form onSubmit={(e) => onAboutSubmit(e)}>
                    <label htmlFor="location">Location</label>
                    <input
                        id="location"
                        type="text"
                        value={aboutInfo.location}
                        onChange={(e) => handleChange("location", e)}
                        required
                    />

                    <label htmlFor="interests">Design Interests</label>
                    <input
                        id="interests"
                        value={aboutInfo.designInterests}
                        type="text"
                        onChange={(e) => handleChange("designInterests", e)}
                        required
                    />

                    <label htmlFor="quote">Your Favorite Quote</label>
                    <input
                        id="quote"
                        type="text"
                        value={aboutInfo.favQuote}
                        onChange={(e) => handleChange("favQuote", e)}
                        required
                    />

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className="about-view">
                    <p>Location</p>
                    <p>{user.location ? user.location : "--"}</p>
                    <p>Design Interests</p>
                    <p>{user.designInterests ? user.designInterests : "--"}</p>
                    <p>Your Favorite Quote</p>
                    <p>{user.favQuote ? user.favQuote : "--"}</p>
                </div>
            )}
        </div>
    );
};