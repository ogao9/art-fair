import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";
import Card from "./Card"
import {SampleData, Images} from './SampleData'
import "./GalleryCard.scss"

const useClickOutside = (handler) =>{
    const domNode = useRef();

    useEffect(()=>{
        let maybeHandler = (event) =>{
            if(domNode.current && !domNode.current.contains(event.target))
                handler();
        }
        document.addEventListener("mousedown", maybeHandler)

        return ()=>{
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode;
}

const GalleryCard = ({ image, setActive }) => {

    const cardRef = useClickOutside(()=>{history.replace(`/Gallery/${category}`)});

    const history = useHistory()
    const { path, url} = useRouteMatch();
    const { id, category } = useParams(); //cardID is a string
    const cardID = parseInt(id);

    const content = SampleData.find(obj => obj.id === cardID);

    useEffect(()=>{
        setActive(true);

        return()=>{
            setActive(false);
        }
    },[])

    return (
        <div className="gallery-card1" ref={cardRef}>
            
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
                <h3>A note from the creator</h3>
                <p>{content.description ? content.description : "No Description Available"}</p>
            </div>
            <div>
                    <i class="far fa-plus-square"></i> Save this Design
            </div>
        
        </div>
    );
};

export default GalleryCard;




