import React, { useState, useRef } from "react";
import Wildcard from '../../images/wildcard.jpg'
import './Card.scss'

const Card = ({ content, image, children }) => {
    return (
        <div className="card">
            <img src={image} alt="Design"/>
            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                </div>
                <div className="text-flex">
                    <p>{content.creator ? content.creator : "Username"}</p>
                    <span className="category-tag">{content.category ? content.category : "category"} </span>
                </div>
                
            </div>
            <div>
                    <i class="far fa-plus-square"></i> Save this Design
            </div>
            {children}
        </div>
    );
};

Card.defaultProps ={
    image: Wildcard
}

export default Card;


