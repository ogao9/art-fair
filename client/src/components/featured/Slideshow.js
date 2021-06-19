import React, {useState, useEffect} from 'react'
import './Slideshow.scss'

const Slideshow = ({ featuredArray }) => {
    const [currentSlide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [intervalID, setIntervalID] = useState();

    //setInterval returns an ID that we need to reference to clear it
    useEffect(() => {
        setIntervalID(setInterval(() => {
            setSlide((currentSlide) => {
                if (currentSlide === featuredArray.length - 1) return 0;
                else return currentSlide + 1;
            })
        }, 3000));

        return () => {
            clearInterval(intervalID); //cleanup (onComponentUnmount)
        };
    }, []);

    const nextSlide = () => {
        if (currentSlide === featuredArray.length - 1) 
            setSlide(0);
        else 
            setSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (currentSlide === 0) 
            setSlide(featuredArray.length - 1);
        else 
            setSlide(currentSlide - 1);
    };

    const togglePause = () => {
        //determine what to do based on the state BEFORE click
        if(!paused)  
            clearInterval(intervalID);
        else{
            setIntervalID(setInterval(() => {
                setSlide((currentSlide) => {
                    if (currentSlide === featuredArray.length - 1) return 0;
                    else return currentSlide + 1;
                })
            }, 3000))
        }

        setPaused(!paused); //set new state
    }

    return (
        <div className="slideshow-container">
            <div className="slideshow-track">
                {featuredArray.map((content, index) => (
                    <div key={index} className={`slideshow-slide ${currentSlide===index ? "active" : null}`}>
                        <img src={content.img} alt="Digital" />
                        <div>
                            <div className="text-flex">
                                <h2>{content.title ? content.title : "Title"}</h2>
                                <span>#Inpsired: {content.impact}</span>
                            </div>
                            <div className="text-flex">
                                <p>{content.creator ? content.creator : "Username"}</p>
                                <span>Circular Tag</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <nav className="slideshow-nav">
                    <button onClick={prevSlide}><i class="fas fa-step-backward"></i></button>
                    <button onClick={togglePause}>
                        {paused
                        ? <i class="fas fa-play"></i>
                        : <i class="fas fa-pause"></i>
                        }
                    </button>
                    <button onClick={nextSlide}><i class="fas fa-step-forward"></i></button>
            </nav>
        </div>
    );
};

export default Slideshow;
