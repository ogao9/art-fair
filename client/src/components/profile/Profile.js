import React, { useState, useContext }  from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { UserContext } from "../../UserContext";
import userServices from "../../services/userServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../design-home/Card";
import DesignForm from "../multi-step-form/DesignForm"
import "./Profile.scss";


const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    const [showForm, setShow] = useState(false);
    const [showEdit, setEdit] = useState(false);

    const yourCards = user ? user.yourCards : [];
    const savedCards = user ? user.savedCards : [];

    const handleAboutForm = async (e)=>{
        e.preventDefault();
        //const updated_info = aboutForm;
        //const res = await userServices.updatePersonalInfo(updated_info)
        // if(res)
        //     setUser(res)
        // else   
        //     alert("Something went wrong!")

        setEdit(false);
    }
    
    return (
        <>
            <Header />
            <div className="profile-container">
                <div className={`profile-left ${showForm ? "form-active": null}`}>
                    <div className="profile-header">
                        <div className="avatar">{user ? user.username[0] : "O"}</div>
                        <h2>{user ? user.username : "Username"}</h2>
                        <p>{user ? user.email : "Email"}</p>
                    </div>

                    <hr/>
                    
                    <div className="profile-about">
                        <div className="profile-edit"> 
                           <h2>About</h2>
                           <button onClick={()=>setEdit(!showEdit)}><i class="fas fa-pen"></i>Edit</button>
                        </div>
                        
                        {showEdit ?
                        <form onSubmit={(e)=>handleAboutForm(e)}>
                            <label htmlFor="location">Location</label>
                            <input id="location" type="text"/>

                            <label htmlFor="interests">Design Interests</label>
                            <input id="interests" type="text"/>

                            <label htmlFor="quote">Your Favorite Quote</label>
                            <input id="quote" type="text"/>

                            <button type="submit">Save</button>
                        </form>
                        :
                        
                        <div className="about-view">
                            <p>Location</p>
                            <p>{user.location ? user.location : "--"}</p>
                            <p>Design Interests</p>
                            <p>{user ? user.interests : "--"}</p>
                            <p>Your Favorite Quote</p>
                            <p>{user ? user.favQuote : "--"}</p>
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
                        <h2 className="title">Badges</h2>
                        <div className="badge-container">
                            <div>
                            <div><i class="fas fa-shapes fa-5x"/></div>
                            <p>Design Novice</p>
                            </div>
                            <div>
                            <div><i class="fas fa-shapes fa-5x"/></div>
                            <p>Contributor</p>
                            </div>
                        </div>
                    </section>

                    <section className="right-item">
                        <h2 className="title">Your Designs</h2>
                        <GalleryDisplay cardsPerPage={2} galleryData={yourCards}/>
                        
                    </section>

                    <section className="right-item">
                        <h2 className="title">Saved Designs</h2>
                        <GalleryDisplay cardsPerPage={1} galleryData={savedCards}/>
                    </section>

                    <section className="right-item">
                        <h2 className="title">Activity Log</h2>
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
    const {url} = useRouteMatch();

    const [currentPage, setCurrentPage] = useState(1);
    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = galleryData.slice(startIndex, endIndex);
    

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


