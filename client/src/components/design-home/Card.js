import React, { useState, useRef } from "react";
import Wildcard from '../../images/wildcard.jpg'
import './Card.scss'

const Card = ({ content, image }) => {
    return (
        <div className="card">
            <img src={image} alt="Design"/>
            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                    <span className="category-tag">Save</span>
                </div>
                <div className="text-flex">
                    <p>{content.creator ? content.creator : "Username"}</p>
                    <span className="category-tag">{content.category ? content.category : "category"} </span>
                </div>
            </div>
        </div>
    );
};

Card.defaultProps ={
    image: Wildcard
}

export default Card;


