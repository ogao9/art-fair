import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../art-central/Card";
import cardServices from "../../services/cardServices";
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

    return (
        <div>
            <Header />
            <div className="flex-container">
                <div className="left">
                    <h2>{loginInfo ? "Username Goes Here" : "Not Logged In"}</h2>
                    <button style={{backgroundColor:'black',padding:'15px',textAlign:'center'}}><Link to='/Form'>Submit Your Design!</Link></button>
                </div>
                <div className="right">
                    <h2>User's Cards</h2>
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
            <Footer />
        </div>
    );
};

export default Profile;




