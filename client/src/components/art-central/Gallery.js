import React, { useState, useEffect } from "react";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import Card from "./Card";
import Pagination from "./Pagination";
import cardServices from "../../services/cardServices";
import './Gallery.css'

import SampleData from './SampleData'

const Gallery = () => {
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
        <div className="component-container">
            <Header/>
            <div className="dark-theme">
                <section className="Gallery-welcome">
                    <div className="welcome-text-container">
                        <h1>$Template String: Outdoors </h1>
                        <p>We're glad you're taking design outdoors. It's amazing out there.</p> 
                    </div>
                </section>

                <section className="Gallery-content">
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
                    
                    <div className="pagination-container">
                        <Pagination
                            currentPage={currentPage}
                            setPage={setPage}
                            totalCards={SampleData.length}
                            cardsPerPage={cardsPerPage}
                        />
                    </div>
                </section>

                <div className="filler"/>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;


