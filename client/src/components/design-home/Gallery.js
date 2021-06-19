import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import cardServices from "../../services/cardServices";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import Card from "./Card";
import SubmitImg from "../../images/submitForm.png"
import './Gallery.scss'
import {SampleData, Images} from './SampleData'


const Gallery = ({cardsPerPage}) =>{
    const {path, url} = useRouteMatch(); //url is the current URL, while path contains the pattern

    return (
        <>
            <Header/>
            <Route path={`${path}/:category`}> 
                    <GalleryDisplay cardsPerPage={cardsPerPage}/>
            </Route>
            <Footer/>
        </>
    );
}

Gallery.defaultProps = {
    cardsPerPage: 6
};

export default Gallery;


const GalleryDisplay = ({cardsPerPage}) => {
    const [galleryData, setGalleryData] = useState([]);
    let { category } = useParams(); //access url parameters, we get the category name here

    useEffect(() => {
        const setData = async () => {
            const data = await cardServices.getCategory(category);
            setGalleryData(data);
        };
        setData();
        console.log("useEffect Called")
    },[]); 
    

    // ---------- Pagination: We are just manipulating the artInfo array ----------
    const [currentPage, setCurrentPage] = useState(1);
    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    
    const cardsToShow = galleryData ? galleryData.slice(startIndex, endIndex) : SampleData.slice(startIndex, endIndex); 
    const totalCards = galleryData ? galleryData.length : SampleData.length;
    
    const categoryImage = Images.find(obj => obj.name === category).image;

    return (
        <>
            <div className="gallery-container">
                <section className="gallery-welcome">
                    <div className="welcome-text">
                        <h1>Welcome to the {category} Gallery</h1>
                        <p>We're glad you're taking design {category}. You can do some amazing things there.</p> 
                    </div>
                </section>

                <section className="gallery-content">
                    <div className="card-container">
                        {cardsToShow.length
                            ? cardsToShow.map(cardInfo => (
                                <Card
                                    key={cardInfo._id}
                                    content={cardInfo}
                                    image={categoryImage}
                                />
                            ))
                            : "No Cards Available"}
                    </div>

                    <div className="pagination-container">
                        <Pagination
                            currentPage={currentPage}
                            setPage={(page)=>setCurrentPage(page)}
                            totalCards={totalCards}
                            cardsPerPage={cardsPerPage}
                        />
                    </div>
                </section>
            </div>

            <div className="submit-teaser">
                <div className="teaser-left">
                   <h1>Want to showcase your design?</h1>
                    <p>It's easy and there's no pressure. All designs have the potential to inspire.</p>
                    <button>
                        <Link to='/Profile'>Submit your design</Link>
                    </button> 
                </div>

                <div className="teaser-right">
                    <img src={SubmitImg} alt="submit form screenshot" />
                </div>
            </div>
        </>
    );
};


function Pagination({ currentPage, setPage, totalCards, cardsPerPage }) {
    const numPages = Math.ceil(totalCards / cardsPerPage);
    const pages = [];
    for (let i = 1; i <= numPages; i++) pages.push(i);

    const handleClick = (e, value) => {
        setPage(value);
    };

    return (
        <nav className="Pagination-container">
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

    // //Increments specified card's impact
    // const impactbtn = async (id) => {
    //     const old_card = await cardServices.getOne(id);
    //     const updated_card = {...old_card, impact: old_card.impact+1}
    //     cardServices.updateCard(id, updated_card);
    //     setDB(db+1)
    // };

    // //PROBLEM: delete doesn't remove the card from UI
    // const deletebtn = (id) => {
    //     cardServices.deleteCard(id);
        
    //     //Temporary Fix: still kind of broken
    //     setArtInfo(artInfo.filter(card=>card._id!== id))
    // };