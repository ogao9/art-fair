import React, { useState, useContext, useEffect }  from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../UserContext";
import userServices from "../../services/userServices";
import cardServices from "../../services/cardServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../design-home/Card";
import DesignForm from "../multi-step-form/DesignForm"
import "./Profile.scss";


const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    const [showForm, setShow] = useState(false);
    const [showEdit, setEdit] = useState(false);

    const [yourCards, setYourCards] = useState([]);
    const [savedCards, setSavedCards] = useState([]);
    const [aboutInfo, setAboutInfo] = useState({})

    useEffect(()=>{
        const getCards = async ()=>{
            const yourData = await cardServices.getYourCards(user._id)
            const savedData = await cardServices.getSavedCards(user._id)
            setYourCards(yourData);
            setSavedCards(savedData);
            setAboutInfo({_id:user._id, location: user.location, designInterests: user.designInterests, favQuote: user.favQuote});
        }
        getCards();
    }, [user, savedCards])

    const handleChange = (input_field, e) =>{
        setAboutInfo({...aboutInfo, [input_field]: e.target.value })
    }

    const handleAboutForm = async (e)=>{
        e.preventDefault();
        const res = await userServices.updatePersonalInfo(aboutInfo)
        if(res)
            setUser(res)
        else   
            alert("Something went wrong!")
        setEdit(false);
    }

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
    
    return (
        <>
            <Header />
            <div className="profile-container">
                <div className={`profile-left ${showForm ? "form-active" : null}`}>
                    <div className="profile-header">
                        <div className="avatar">{user ? user.username[0] : "O"}</div>
                        <h1>{user ? user.username : "Username"}</h1>
                        <p>{user ? user.email : "Email"}</p>
                    </div>

                    <hr />

                    <div className="profile-about">
                        <div className="profile-edit">
                            <h2>About</h2>
                            <button onClick={() => setEdit(!showEdit)}>
                                <i class="fas fa-pen"></i>Edit
                            </button>
                        </div>

                        {showEdit ? (
                            <form onSubmit={(e) => handleAboutForm(e)}>
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

                    <div className="share">
                        <h2>Share Your Design</h2>
                        <button
                            className="link-submit"
                            onClick={() => setShow(!showForm)}
                        >
                            Submit Your Design!
                        </button>
                    </div>
                </div>

                <div className={`profile-right ${showForm ? "form-active" : null}`}>
                    <section className="right-item">
                        <h2 className="title">Badges</h2>
                        <div className="badge-container">
                            <div>
                                <div>
                                    <i class="fas fa-shapes fa-5x" />
                                </div>
                                <p>Design Novice</p>
                            </div>
                            <div>
                                <div>
                                    <i class="fas fa-shapes fa-5x" />
                                </div>
                                <p>Contributor</p>
                            </div>
                        </div>
                    </section>

                    <section className="right-item">
                        <h2 className="title">Your Designs</h2>
                        <GalleryDisplay cardsPerPage={2} galleryData={yourCards} handleRemove={removeYourCard}/>
                    </section>

                    <section className="right-item">
                        <h2 className="title">Saved Designs</h2>
                        <GalleryDisplay cardsPerPage={2} galleryData={savedCards} handleRemove={removeSavedCard}/>
                    </section>

                    <section className="right-item">
                        <h2 className="title">Activity Log</h2>
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


function GalleryDisplay({cardsPerPage, galleryData, handleRemove}){
    const [currentPage, setCurrentPage] = useState(1);
    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = galleryData ? galleryData.slice(startIndex, endIndex) : [];
    const totalCards = galleryData ? galleryData.length : 0;
    
    return(
        <section className="gallery-content">
            <div className="card-container">
                {cardsToShow.length
                    ? cardsToShow.map((cardInfo) => (
                        <div className="gallery-card" key={cardInfo._id}>
                            <Card content={cardInfo}>
                                <button onClick={()=>handleRemove(cardInfo._id)}><i class="far fa-minuse-square"></i> Remove this Design</button>
                            </Card>
                        </div>
                    ))
                    : "No Cards Available"}
            </div>

            <div>
                <Pagination
                    currentPage={currentPage}
                    setPage={(page) => setCurrentPage(page)}
                    totalCards={totalCards}
                    cardsPerPage={cardsPerPage}
                />
            </div>
        </section>
    )
}

GalleryDisplay.defaultProps = {
    cardsPerPage: 6
};


function Pagination({ currentPage, setPage, totalCards, cardsPerPage }) {
    const numPages = Math.ceil(totalCards / cardsPerPage);
    const pages = [];
    for (let i = 1; i <= numPages; i++) pages.push(i);

    const handleClick = (e, value) => {
        setPage(value);
    };

    return (
        <nav className="pagination-container">
            {pages.map((pageNum) => (
                <a
                    key={pageNum}
                    href="#!"
                    onClick={(e) => handleClick(e, pageNum)}
                    className={currentPage === pageNum ? "active" : null}
                >
                    {pageNum}
                </a>
            ))}
        </nav>
    );
}


