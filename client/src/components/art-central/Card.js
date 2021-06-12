import React, { useState, useRef } from "react";
import Digital from "../../images/digital.jpg";
import './Card.scss'


const Card = ({ content, impactbtn}) => {

    return (
        <div className="card">
            <img src={Digital} alt="Digital"/>
            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                    <span>#Inpsired: {content.impact}</span>
                </div>
                <div className="text-flex">
                    <h4>{content.creator ? content.creator : "Username"}</h4>
                    <span>Circular Tag</span>
                </div>
            </div>
        </div>
    );
};

export default Card;


