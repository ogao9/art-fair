import React, { useState, useEffect } from "react";
import SlideshowCard from "./SlideshowCard";
import Balloon from "../../images/balloons.jpg";
import Desk from "../../images/desk.jpg";
import Modern from "../../images/modern.jpg";
import Tree from "../../images/tree.png";
import "./Slideshow.css";

const Slideshow = () => {
    const [currentSlide, setSlide] = useState(0);

    // //setInterval returns an ID
    // useEffect(() => {
    //     const intervalID = setInterval(nextSlide, 1000);

    //     return () => {
    //         clearInterval(intervalID); //cleanup
    //     }
    // }, [])

    const sampleContent = [
        {
            title: "Tree Wall",
            creator: "Maple54",
            description: "Give your tree some stylish protection",
            impact: 2,
            _id: "65",
            img: Tree,
        },
        {
            title: "Simple Desk",
            creator: "",
            description: "Have a clear mind. Keep your desk simple.",
            impact: 3,
            _id: "66",
            img: Desk,
        },
        {
            title: "Connections",
            creator: "Modo Green",
            description: "Exquisite yet soothing",
            impact: 4,
            _id: "67",
            img: Modern,
        },
        {
            title: "Floating",
            creator: "Bluesky87",
            description: "Let it float. Let it fly.",
            impact: 24,
            _id: "69",
            img: Balloon,
        },
    ];

    const nextSlide = () => {
        console.log("next slide invoked", currentSlide);
        if (currentSlide === sampleContent.length - 1) setSlide(0);
        else setSlide((currentSlide) => currentSlide + 1);
    };
    const prevSlide = () => {
        if (currentSlide === 0) setSlide(sampleContent.length - 1);
        else setSlide(currentSlide - 1);
    };

    return (
        <div className="slideshow-container">
            <SlideshowCard content={sampleContent[currentSlide]} />
            <button onClick={prevSlide} className="left-arrow">
                <i class="fas fa-arrow-circle-left fa-3x"></i>
            </button>
            <button onClick={nextSlide} className="right-arrow">
                <i
                    class="fas fa-arrow-circle-right fa-3x"
                    style={{ backgroundColor: "green" }}
                ></i>
            </button>
            {/* <h1>{currentSlide} have elapsed</h1> */}
        </div>
    );
};

export default Slideshow;
