import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import cardServices from "../../services/cardServices";
import Container from "@material-ui/core/Container";
import './ArtCentral.css'

import SampleData from './SampleData'

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
    //PROBLEM: IF artinfo hasn't loaded, we get an error
    //const cardsToShow = artInfo ? artInfo.slice(startIndex, endIndex) : [] 
    const cardsToShow = SampleData.slice(startIndex, endIndex);
    

    return (
        <div className="art-central">
            <section className="ArtCentralWelcome">
                <h1>Welcome to the Outdoor/Indoor/Modern/Audio Section!</h1>
                <p>We want this to be a truly immersive experience</p>
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
                    <Pagination
                        currentPage={currentPage}
                        setPage={setPage}
                        totalCards={SampleData.length}
                        cardsPerPage={cardsPerPage}
                    />
                </div>
            </Container>
            
            <Footer/>
            <Header/>
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
