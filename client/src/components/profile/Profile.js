import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../art-central/Card";
import cardServices from "../../services/cardServices";
import withAuth from './withAuth'
import "./Profile.css";

const Profile = ({ loginInfo }) => {
    //const [cards, setCards] = React.useState([]);
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
        <div>
            <Header />
            <div className="profile-container">
                <div className="profile-left">
                    <div>
                        <h2>{loginInfo ? loginInfo.username : "Your Username"}</h2>
                        <Link to='/Form'><button className="submit-your-work-btn">Submit Your Design!</button></Link>
                    </div>
                </div>
                <div className="profile-right">
                    <div>
                        <h2>Your Designs</h2>
                        <div className="card-container">
                            {cards
                                ? cards.map((cardInfo) => (
                                    <Card
                                        key={cardInfo._id}
                                        content={cardInfo}
                                        impactbtn={null}
                                        deletebtn={null}
                                    />
                                ))
                                : "No Cards Available"}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;




