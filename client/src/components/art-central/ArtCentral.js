import React from "react";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Card from "./Card";
import PaginationComponent from "./Pagination";
import cardServices from "../../services/cardServices";
import './ArtCentral.css'
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'


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
    const cardsPerPage = 6;

    const setPage = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = artInfo ? artInfo.slice(startIndex, endIndex) : []
    //PROBLEM: IF artinfo hasn't loaded, we get an error
   
                        
    //---------- Pagination ----------
    const[artInfo1, setArtInfo1] = useState([
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
          {
            id: 1,
            title: "Jumping Oranges 4",
            creator: "Peter Banaya",
            legacy: false,
          },
      ]) 
      
      //const cardsToShow = artInfo1.slice(startIndex, endIndex);

    return (
        <div>
            <Header/>
            <section className="ArtCentralWelcome">
                <h1>Welcome to Art Central</h1>
            </section>

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
                
                <div className="flex-container">
                    <PaginationComponent
                        currentPage={currentPage}
                        setPage={setPage}
                        totalCards={artInfo.length}
                        cardsPerPage={cardsPerPage}
                    />
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default ArtCentral;

/* 

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

*/
