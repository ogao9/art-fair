import React, { useState, useEffect, useContext }  from "react";
import { Link, useRouteMatch } from "react-router-dom";
import cardServices from "../../services/cardServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../design-home/Card";
import DesignForm from "../multi-step-form/DesignForm"

import withAuth from './withAuth'
import "./Profile.scss";

//import {GalleryDisplay} from "../design-home/GalleryCategory"
import {Images} from "../design-home/SampleData"
import { UserContext } from "../../UserContext";

const YourCards = [ 
    {
      id: 1,
      title: "Your Card 1",
      creator: "Peter Banaya",
      category: "Digital",
      legacy: false,
    },
    {
      id: 2,
      title: "Peaceful Sunset 2",
      creator: "Ben Park",
      category: "Digital",
      legacy: false,
    },
    {
        id: 1,
        title: "Jumping Oranges 3",
        creator: "Peter Banaya",
        category: "Digital",
        legacy: false,
      },
]

const StarredCards = [
    {
      id: 1,
      title: "Starred Card 1",
      creator: "Peter Banaya",
      legacy: false,
    },
    {
      id: 2,
      title: "Peaceful Sunset 2",
      creator: "Ben Park",
      legacy: false,
    },
    {
        id: 1,
        title: "Jumping Oranges 3",
        creator: "Peter Banaya",
        legacy: false,
      },
]

const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    const [yourCards, setYourCards] = useState(YourCards);
    const [savedCards, setStarredCards] = useState(StarredCards);
    const [showForm, setShow] = useState(false);
    const [showEdit, setEdit] = useState(false);

    // useEffect(() => {
    //     const loadCards = async () => {
    //         const res = await cardServices.getSome(loginInfo.cards); //loginInfo.cards is an array of strings
    //         setCards(res);
    //     };
    //     console.log("Loading Cards...");
    //     loadCards();
    // }, []);
    
    return (
        <>
            <Header />
            <div className="profile-container">
                <div className={`profile-left ${showForm ? "form-active": null}`}>
                    <div className="profile-header">
                        <div className="avatar">{user ? user.username[0] : "O"}</div>
                        <h2>{user ? user.username : "Your Username"}</h2>
                        <h2>Your Email</h2>
                        
                    </div>
                    <hr/>
                    <div className="profile-about">
                        <div className="profile-edit"> 
                           <h2>About</h2>
                           <button onClick={()=>setEdit(!showEdit)}><i class="fas fa-pen"></i>Edit</button>
                        </div>
                        
                        {showEdit ?
                        <form>
                            <label htmlFor="location">Location</label>
                            <input id="location" type="text"/>

                            <label htmlFor="interests">Design Interests</label>
                            <input id="interests" type="text"/>

                            <label htmlFor="quote">Your Favorite Quote</label>
                            <input id="quote" type="text"/>

                            <button type="submit">Save</button>
                        </form>
                        :
                        
                        <div>
                        <p>Location</p>
                        <p>--</p>
                        <p>Design Interests</p>
                        <p>--</p>
                        <p>Your Favorite Quote</p>
                        <p>--</p>
                        </div>
}
                    </div>  

                    <div className="share">
                        <h2>Share Your Design</h2>
                        <button className="link-submit" onClick={()=>setShow(!showForm)}>Submit Your Design!</button>
                    </div>
                </div>

                <div className={`profile-right ${showForm ? "form-active": null}`}>
                    <section className="right-item">
                        <h2>Badges</h2>
                        <p>None</p>
                    </section>

                    <section className="right-item">
                        <h2>Your Designs</h2>
                        <GalleryDisplay cardsPerPage={1} galleryData={yourCards}/>
                        
                    </section>

                    <section className="right-item">
                        <h2>Saved Designs</h2>
                        <GalleryDisplay cardsPerPage={1} galleryData={savedCards}/>
                    </section>

                    <section className="right-item">
                        <h2>Activity Log</h2>
                        <p>Table or List</p>
                    </section>
                    
                </div>

                <div className="design-form">
                    {showForm ? <DesignForm closebtn={()=>setShow(false)} /> : null}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;




function GalleryDisplay({cardsPerPage, galleryData}){
    const {path, url} = useRouteMatch();

    // ---------- Pagination: We are just manipulating the artInfo array ----------
    const [currentPage, setCurrentPage] = useState(1);
    //const categoryImage = Images.find(obj => obj.name === category).image;

    function setCardsToShow (){
        const endIndex = cardsPerPage * currentPage;
        const startIndex = endIndex - cardsPerPage;

        return galleryData.slice(startIndex, endIndex);
    }
    const cardsToShow = setCardsToShow();
    

    return(
        <section className="gallery-content">
            <div className="card-container">
                {cardsToShow.length
                    ? cardsToShow.map((cardInfo) => (
                        <div className="gallery-card" key={cardInfo.id}>
                            <Link to={`${url}/${cardInfo.id}`}/>
                            <Card
                                content={cardInfo}>
                                    <div>
                    <i class="far fa-plus-square"></i> Remove this Design
            </div> </Card>
                        </div>
                    ))
                    : "No Cards Available"}
            </div>

            <div>
                <Pagination
                    currentPage={currentPage}
                    setPage={(page) => setCurrentPage(page)}
                    totalCards={galleryData.length}
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


{/* <div className="card-container">
                            {yourCards
                                ? yourCards.map((cardInfo) => (
                                    <Card
                                        key={cardInfo._id}
                                        content={cardInfo}
                                        impactbtn={null}
                                    />
                                ))
                                : "You have No designs"}
                        </div> */}