import React, { useState, useEffect, useContext, useRef } from "react";
import userServices from "../../services/userServices";
import { UserContext } from "../../UserContext";
import {FeatureImages} from '../../services/SampleData'
import LoginForm from "../login/LoginForm";
import "./Slideshow.scss";


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

const Slideshow = ({ featuredArray }) => {
    const [currentSlide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [intervalID, setIntervalID] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((currentSlide) => {
                if (currentSlide === featuredArray.length - 1) return 0;
                else return currentSlide + 1;
            });
        }, 4000);
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
                }, 4000)
            );
        }
        setPaused(!paused); //set new state
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow-track">
                {featuredArray.map((content, index) => (
                    <SlideshowCard
                        key={index}
                        content={content}
                        index={index}
                        currentSlide={currentSlide}
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


function SlideshowCard({ content, index, currentSlide}) {
    const { user } = useContext(UserContext);
    const [showLogin, setShowLogin] = useState(false);
    const loginRef = useClickOutside (()=>setShowLogin(false))
    const [saved, setSaved] = useState(false)

    const getImage = ()=>{
        const image = FeatureImages.find(obj=> obj.name===content.category).image
        return image;
    }

    async function handleSave() {
        if (user) {
            const cardToSave = {
                userID: user._id,
                cardID: content._id,
            };

            const saved = await userServices.saveCard(cardToSave);
            if(saved)
                setSaved(true);
            else
                alert("failed!")
        } else {
            setShowLogin(true)
        }
    }


    useEffect(()=>{
        if(user)
            setSaved( user.savedCards.includes(content._id))
    }, [user])

    function resolveAction(){
        setShowLogin(false);
        handleSave();
    }

    return (
        <>
        <div className={`slideshow-slide ${currentSlide === index ? "active" : ""}`}>
            <img src={getImage()} alt="Category Image" />
            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                </div>
                <div className="text-flex">
                    <p>{content.creator ? content.creator : "Username"}</p>
                    <span className="category-tag">{content.category}</span>
                </div>
            </div>
            <div>
                <h3>A note from the creator</h3>
                <p>{content.description}</p>
            </div>

            <div>
                {saved 
                ?<button><i class="far fa-check-circle" /> Saved </button>
                :<button onClick={handleSave}><i class="far fa-plus-square" /> Save this Design</button>
                }
            </div>
        </div>

        <div className="show-login" ref={loginRef}>{showLogin && <LoginForm resolveAction={resolveAction}/>}</div>
        </>
    );
}
