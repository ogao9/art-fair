import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useParams, Redirect } from "react-router-dom";
import cardServices from "../../services/cardServices";
import GalleryCard from "./GalleryCard"
import Card from "./Card";
import SubmitImg from "../../images/submitForm.png"
import {SampleData, Images} from './SampleData'
import Wildcard from "../../images/wildcard.jpg";
import './GalleryCategory.scss'

const categories = ["Indoor", "Outdoor", "Digital", "Audio", "Wildcard", "Minimal"]
// if(!categories.includes(category))
//         return <Redirect to='/Gallery'/>;

const GalleryCategory = () =>{
    const [galleryData, setGalleryData] = useState(SampleData);
    const [active, setActive] = useState(false);
    const {path, url} = useRouteMatch();
    let { category } = useParams();     //access url parameters to get category name

    useEffect(() => {
        const setData = async () => {
            const data = await cardServices.getCategory(category);
            setGalleryData(data);
        };
        //setData();
        console.log("useEffect Called")
    },[]); 

    return (
        <>
            <div className={`gallery-container ${active ? "blur" : ""}`}>
                <section className="gallery-welcome">
                    <div>
                        <h1>Welcome to the {category} Design Gallery</h1>
                        <p>We're glad you're taking design {category}. You can do some amazing things there.</p> 
                    </div>
                </section>

                <GalleryDisplay galleryData={galleryData}/>
            </div>

            <section className="card-popup">
                <Route path={`${path}/:id`}>
                    <GalleryCard image={Wildcard} setActive={setActive}/>
                </Route>
            </section>

            <div className={`submit-teaser ${active ? "blur" : ""}`}>
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
}



function GalleryDisplay({cardsPerPage, galleryData}){
    const {path, url} = useRouteMatch();
    let { category } = useParams();     //access url parameters to get category name


    // ---------- Pagination: We are just manipulating the artInfo array ----------
    const [currentPage, setCurrentPage] = useState(1);
    const categoryImage = Images.find(obj => obj.name === category).image;

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
                                content={cardInfo}
                                image={categoryImage}
                            />
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

export{GalleryCategory, GalleryDisplay}
