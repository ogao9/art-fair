import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import Card from "./Card"

const GalleryCard = ({ content, image }) => {
    const { path, url } = useRouteMatch();
    let { cardID } = useParams(); //access url parameters to get category name

    const cardInfo = content[cardID];

    return (
        <div style={myStyle}>
            <h1> This is the Gallery Card</h1>
            <p>{cardID}</p>
            <Card content={cardInfo} image={image} />
        </div>
    );
};

export default GalleryCard;

const myStyle = {
    width: "500px",
    height: "500px",
    backgroundColor: "black",
};
