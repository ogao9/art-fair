import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Slideshow.scss";


const SlideshowCard = ({content, index, currentSlide, setPause})=>{
    return(
        <div className={`slideshow-card ${currentSlide === index ? "active" : ""}`}>
            <Card content={content} setPause={setPause} config="slideshow"/>
        </div>
    )
}

const Slideshow = ({ featuredArray }) => {
    const [currentSlide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((currentSlide) => {
                if (currentSlide === featuredArray.length - 1) return 0;
                else return currentSlide + 1;
            });
        }, 5000);

        setIntervalID(interval);
        
        return () => {
            clearInterval(intervalID); //cleanup (onComponentUnmount)
        };
    }, []);

    const nextSlide = () => {
        if (currentSlide === featuredArray.length - 1) setSlide(0);
        else setSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (currentSlide === 0) setSlide(featuredArray.length - 1);
        else setSlide(currentSlide - 1);
    };

    const togglePause = () => {
        //determine what to do based on the state BEFORE click
        if (!paused) clearInterval(intervalID);
        else {
            setIntervalID(
                setInterval(() => {
                    setSlide((currentSlide) => {
                        if (currentSlide === featuredArray.length - 1) return 0;
                        else return currentSlide + 1;
                    });
                }, 5000)
            );
        }
        setPaused(!paused); //set new state
    };

    const setPause = () =>{
        if(!paused) clearInterval(intervalID)
        setPaused(true);
    }

    return (
        <div className="slideshow-container">
            <div className="slideshow-track">
                {featuredArray.map((content, index) => (
                    <SlideshowCard
                        key={index}
                        content={content}
                        index={index}
                        currentSlide={currentSlide}
                        setPause={setPause}
                    />
                ))}
            </div>

            <nav className="slideshow-nav">
                <button onClick={prevSlide}>
                    <i class="fas fa-step-backward"></i>
                </button>
                <button onClick={togglePause}>
                    {paused ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>}
                </button>
                <button onClick={nextSlide}>
                    <i class="fas fa-step-forward"></i>
                </button>
            </nav>
        </div>
    );
};

export default Slideshow;