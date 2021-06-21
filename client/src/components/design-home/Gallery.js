import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import cardServices from "../../services/cardServices";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import GalleryCard from "./GalleryCard"
import Card from "./Card";
import SubmitImg from "../../images/submitForm.png"
import './Gallery.scss'
import {SampleData, Images} from './SampleData'


const Gallery = ({cardsPerPage}) =>{
    const {path, url} = useRouteMatch(); //url is the actual url while path contains the pattern

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
    const [galleryData, setGalleryData] = useState(SampleData);
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
    

    // ---------- Pagination: We are just manipulating the artInfo array ----------
    const [currentPage, setCurrentPage] = useState(1);
    const categoryImage = Images.find(obj => obj.name === category).image;

    function setCardsToShow (){
        const endIndex = cardsPerPage * currentPage;
        const startIndex = endIndex - cardsPerPage;

        return galleryData.slice(startIndex, endIndex);
    }
    const cardsToShow = setCardsToShow();


    return (
        <>
            <div className="gallery-container">

                <section className="gallery-welcome">
                    <div>
                        <h1>Welcome to the {category} Design Gallery</h1>
                        <p>We're glad you're taking design {category}. You can do some amazing things there.</p> 
                    </div>
                </section>

                <section className="gallery-content">
                    <div className="card-container">
                        {cardsToShow.length
                            ? cardsToShow.map((cardInfo, idx) => (
                                <div className="gallery-card" key={idx}>
                                    <Link to={`${url}/${idx}`}/>
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

                <section className="card-popup">
                        <Route path={`${path}/:cardID`}>
                            <GalleryCard content={cardsToShow} image={categoryImage}/>
                        </Route>
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

