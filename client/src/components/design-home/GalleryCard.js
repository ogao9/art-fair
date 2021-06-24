import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import cardServices from "../../services/cardServices";
import { SampleData, Categories } from "../../services/SampleData";
import SubmitImg from "../../images/submitForm.png"
import "./GalleryCard.scss";

const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) handler();
        };
        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

const GalleryCard = ({ setBlur }) => {
    const [content, setContent] = useState([]);
    const history = useHistory();
    const cardRef = useClickOutside(() => {
        history.replace(`/Gallery/${category}`);
    });

    const { id, category } = useParams(); 

    useEffect(() => {
        setBlur(true);
        const getData = async () =>{
            const data = await cardServices.getOneCard(id);
            setContent(data);
        }
        getData();

        return () => {
            setBlur(false);
        };
    }, []);

    const image = SubmitImg

    return (
        <div className="gallery-card1" ref={cardRef}>
            <img src={image} alt="Design" />

            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                </div>
                <div className="text-flex">
                    <p>{content.creator ? content.creator : "Username"}</p>
                    <span className="category-tag">
                        {content.category ? content.category : "category"}{" "}
                    </span>
                </div>
            </div>

            <div>
                <h3>A note from the creator</h3>
                <p>
                    {content.description
                        ? content.description
                        : "No Description Available"}
                </p>
            </div>
            
            <div>
                <i class="far fa-plus-square"></i> Save this Design
            </div>
        </div>
    );
};

export default GalleryCard;
