import React, {useState, useEffect} from 'react'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import SampleData from './Sample'
import './Feature.scss'


const SlideshowCard = ({content}) => {
    return (
        <div className="slideshow-card">
            <img src={content.img} alt="Digital"/>
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


const Feature = () => {
    const [currentSlide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const sampleContent = SampleData;

    //setInterval returns an ID that we need to reference to clear it
    useEffect(() => {
        const intervalID = setInterval(()=>{
            setSlide( currentSlide => {
                if (currentSlide === sampleContent.length - 1) 
                    return 0;
                else 
                    return currentSlide + 1;
            })
        }, 3000);

        return () => {
            clearInterval(intervalID); //cleanup
        }
    }, [])

    const nextSlide = () => {
        if (currentSlide === sampleContent.length - 1) 
            setSlide(0);
        else 
            setSlide((currentSlide) => currentSlide + 1);
    };

    const prevSlide = () => {
        if (currentSlide === 0) 
            setSlide(sampleContent.length - 1);
        else 
            setSlide(currentSlide - 1);
    };

    const togglePause = () => {
        setPaused(!paused);
    }


    return (
        <div>
            <Header/>
            <div className="feature-container">
                <nav className="feature-nav">
                    <button onClick={prevSlide}><i class="fas fa-step-backward"></i></button>
                    <button onClick={togglePause}>
                        {paused
                        ? <i class="fas fa-play"></i>
                        : <i class="fas fa-pause"></i>
                        }
                    </button>
                    <button onClick={nextSlide}><i class="fas fa-step-forward"></i></button>
                </nav>
                <div className="feature-left">
                    <h1>Check out this week's featured designs!</h1>
                </div>
                <div className="feature-right">
                    <SlideshowCard content={sampleContent[currentSlide]}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Feature
