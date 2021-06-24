import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useParams} from "react-router-dom";
import cardServices from "../../services/cardServices";
import Card from "./Card";
import GalleryCard from "./GalleryCard"
import SubmitImg from "../../images/submitForm.png"
import './GalleryCategory.scss'
//import { SampleData} from "../../services/SampleData";

const GalleryCategory = () =>{
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [blur, setBlur] = useState(false);

    const {path} = useRouteMatch();
    let { category } = useParams();     

    useEffect(() => {
        setLoading(true);
        const setData = async () => {
            const data = await cardServices.getCategoryCards(category);
            setGalleryData(data);
            setLoading(false);
        };
        setData();
    },[]); 

    if(loading)
        return <h2>Loading...</h2>
    return (
        <>
            <div className={`gallery-container ${blur ? "blur" : ""}`}>
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
                    <GalleryCard setBlur={setBlur}/>
                </Route>
            </section>

            <div className={`submit-teaser ${blur ? "blur" : ""}`}>
                <div className="teaser-left">
                    <h1>Want to showcase your design?</h1>
                    <p>It's easy and there's no pressure. We believe all designs have the potential to inspire.</p>
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
    const {url} = useRouteMatch();   

    // Pagination: Slicing cardsToShow array -----
    const [currentPage, setCurrentPage] = useState(1);
    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = galleryData.slice(startIndex, endIndex);
    
    return(
        <>
        <section className="gallery-content">
            <div className="card-container">
                {cardsToShow.length
                    ? cardsToShow.map((cardInfo) => (
                        <div className="gallery-card" key={cardInfo._id}>
                            <Link to={`${url}/${cardInfo._id}`}/>
                            <Card
                                content={cardInfo}
                            />
                        </div>
                    ))
                    : "No Cards Available"}
            </div>
        </section>
        
        <Pagination
            currentPage={currentPage}
            setPage={(page) => setCurrentPage(page)}
            totalCards={galleryData.length}
            cardsPerPage={cardsPerPage}
        />
            
        </>
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

    const next = () =>{
        if(currentPage !== pages.length)
            setPage(currentPage + 1)
    }

    const prev = () =>{
        if(currentPage !== 1)
            setPage(currentPage - 1)
    }

    return (
        <nav className="pagination-container">
            <ul>
                <li><a href="#!" onClick={prev}><i class="fas fa-angle-double-left fa-sm"/></a></li>
            {pages.map((pageNum) => (
                <li key={pageNum}>
                <a
                    href="#!"
                    onClick={(e) => handleClick(e, pageNum)}
                    className={currentPage === pageNum ? "active" : null}
                >
                    {pageNum}
                </a>
                </li>
            ))}
                <li><a href="#!" onClick={next}><i class="fas fa-angle-double-right fa-sm"/></a></li>
            </ul>
        </nav>
    );
}

export{GalleryCategory, GalleryDisplay}
