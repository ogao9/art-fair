import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "../card/Card";
import "./GalleryDisplay.scss"

export default function GalleryDisplay ({cardsPerPage, galleryData, cardLink, handleRemove}){
    const {url} = useRouteMatch();   

    // Pagination: Slicing cardsToShow array -----
    const [currentPage, setCurrentPage] = useState(1);
    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = galleryData ? galleryData.slice(startIndex, endIndex) : [];
    const totalCards = galleryData ? galleryData.length : 0;
    
    return(
        <div className="gallery-display-container">
            <section className="gallery-content">
                <div className="card-container">
                    {cardsToShow.length
                        ? cardsToShow.map((cardInfo) => (
                            <div className="gallery-card" key={cardInfo._id}>
                                {cardLink ? <Link to={`${url}/${cardInfo._id}`}/> : null}
                                <Card content={cardInfo}>
                                    {handleRemove 
                                    ? <button onClick={()=>handleRemove(cardInfo._id)}><i class="far fa-minus-square"></i> Remove this Design</button>
                                    : null}
                                </Card>
                            </div>
                        ))
                        : "No Cards Available"}
                </div>
            </section>
        
            <Pagination
                currentPage={currentPage}
                setPage={(page) => setCurrentPage(page)}
                totalCards={totalCards}
                cardsPerPage={cardsPerPage}
            />
        </div>
    )
}

GalleryDisplay.defaultProps = {
    cardsPerPage: 6,
    cardLink: false,
    handleRemove: null,
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