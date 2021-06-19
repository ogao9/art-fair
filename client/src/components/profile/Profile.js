import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import cardServices from "../../services/cardServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../design-home/Card";
import DesignForm from "../multi-step-form/DesignForm"
import withAuth from './withAuth'
import "./Profile.scss";

const Profile = ({ loginInfo }) => {
    //const [cards, setCards] = React.useState([]);
    const [showForm, setShow] = useState(false);

    const cards = [
        {
          id: 1,
          title: "Jumping Oranges 1",
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

    // useEffect(() => {
    //     const loadCards = async () => {
    //         const res = await cardServices.getSome(loginInfo.cards); //loginInfo.cards is an array of strings
    //         setCards(res);
    //     };
    //     console.log("Loading Cards...");
    //     loadCards();
    // }, []);

    // <button style={{backgroundColor:'black',padding:'15px',textAlign:'center'}}><Link to='/Form'>Submit Your Design!</Link></button>
    
    return (
        <>
            <Header />
            <div className={`profile-container`}>
                <div className={`profile-left ${showForm ? "form-active": null}`}>
                    <div className="left-item">
                        <div>
                            <div className="avatar">{loginInfo ? loginInfo.username[0] : "O"}</div>
                            <h2>{loginInfo ? loginInfo.username : "Your Username"}</h2>
                            <h2>Other Info Here</h2>
                        </div>
                    </div>
                </div>

                <div className={`profile-right ${showForm ? "form-active": null}`}>
                    <section className="right-item">
                        <h2>Submit A Design</h2>
                        <button className="link-submit" onClick={()=>setShow(!showForm)}>Submit Your Design!</button>
                    </section>
                    <section className="right-item">
                        <h2>Your Designs</h2>
                        <div className="card-container">
                            {cards
                                ? cards.map((cardInfo) => (
                                    <Card
                                        key={cardInfo._id}
                                        content={cardInfo}
                                        impactbtn={null}
                                    />
                                ))
                                : "You have No designs"}
                        </div>
                    </section>
                    <section className="right-item">
                        <h2>Saved Designs</h2>
                        
                    </section>
                    <section className="right-item">
                        <h2>Badges</h2>

                    </section>
                </div>

                <div className="design-form">
                    {showForm ? <DesignForm loginInfo={null} closebtn={()=>setShow(false)} /> : null}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;




