import React from "react";
import "./Pagination.css";

export default function PaginationComponent({currentPage,setPage,totalCards,cardsPerPage}) {
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
                    className={currentPage === pageNum && "active"}
                >
                    {pageNum}
                </a>
            ))}
        </nav>
    );
}

const fcn = () => {};
