import React from "react";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Card from "./Card";
import PaginationComponent from "./Pagination";
import cardServices from "./cardServices";
import TempForm from './TempForm'
import './ArtCentral.css'


const ArtCentral = () => {
    const [artInfo, setArtInfo] = useState([]);
    const [db, setDB] = useState(0);

    //MODIFIES: artInfo
    //EFFECTS: fetches data from database every time this page renders
    //         We created a function inside the function because WE can't pass an async function directly into useEffect()
    useEffect(() => {
        const setData = async () => {
            const artdata = await cardServices.getAll();
            setArtInfo(artdata);
        };
        setData();
        console.log("useEffect Called")
    },[db]); //useEffect only happens if something in this array changes
    //QUESTION: when exactly does useEffect run?? It goes crazy without the empty array


    //Increments specified card's impact
    const impactbtn = async (id) => {
        const old_card = await cardServices.getOne(id);
        const updated_card = {...old_card, impact: old_card.impact+1}
        cardServices.updateCard(id, updated_card);
        setDB(db+1)
    };

    //PROBLEM: delete doesn't remove the card from UI
    const deletebtn = (id) => {
        cardServices.deleteCard(id);
        setDB(db+1)
        //Temporary Fix: still kind of broken
        setArtInfo(artInfo.filter(card=>card._id!== id))
    };

    const addCard = (new_card) => {
        cardServices.postCard(new_card);
        setDB(db+1)
    }


    // ---------- Pagination ----------
    //We are just manipulating the artInfo array
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = artInfo.slice(startIndex, endIndex)
    //PROBLEM: IF artinfo hasn't loaded, we get an error
                        
    //---------- Pagination ----------


    return (
        <div>
            <header className="ArtCentralWelcome">
                <h1>Welcome to Art Central</h1>
            </header>

        <Container maxWidth="lg">
            <div className="card-container">
                {cardsToShow.length
                    ? cardsToShow.map(cardInfo => (
                          <Card
                              key={cardInfo._id}
                              content={cardInfo}
                              impactbtn={impactbtn}
                              deletebtn={deletebtn}
                          />
                      ))
                    : "No Cards Available"}
            </div>

            <PaginationComponent
                paginate={paginate}
                totalCards={artInfo.length}
                cardsPerPage={cardsPerPage}
            />
        </Container>
        </div>
    );
};

export default ArtCentral;

/* Notes:
1. artInfo.map() applies a function to every item in the array and then returns it 
2.
3.


artInfo Before we connected the json server

const[artInfo, setArtInfo] = useState([
  {
    id: 1,
    title: "Jumping Oranges",
    creator: "Peter Banaya",
    legacy: false,
  },
  {
    id: 2,
    title: "Peaceful Sunset",
    creator: "Ben Park",
    legacy: false,
  }
]) 




//addbtn ID no longer needed
    console.log("add called");
    const id = Math.random() * 1000;
    const newCard = {id, ...new_card_info};
setArtInfo([...artInfo, newCard]);
*/
