import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Outdoors from '../../images/outdoors.jpg'
import Indoors from '../../images/indoors.jpg'
import Modern from '../../images/digital.jpg'
import Audio from '../../images/audio.jpg'
import Wildcard from '../../images/wildcard.jpg'
import "./DesignHome.scss";

const DesignHome = () => {
    const [hover1, setHover1] = useState(false);

    return (
        <>
            <Header />
            <section className="designhome-welcome">
                <div className="welcome-text">
                   <h1>Find your inspiration. Find your design.</h1>
                    <p>Choose from our 5 pre-defined categories or take a chance with the wild card.</p> 
                </div>
            </section>

            <section className="category-container">
                <div className="category-spacer">
                    {/* This is a temporary fix */}
                </div>
                <div className="category-grid">
                    <div onMouseEnter={() => setHover1(true)}
                        onMouseLeave={() => setHover1(false)}>
                        <img src={Outdoors} alt="Outdoors"/>
                        <h1>Outdoor</h1>
                        {hover1 && (
                            <div className="overlay">
                                <Link to='/Gallery'/>
                            </div>
                        )}
                    </div>
                    <div>
                        <img src={Indoors} alt="Outdoors"/>
                        <h1>Indoor</h1>
                    </div>
                    <div>
                        <img src={Modern} alt="Outdoors"/>
                        <h1>Digital</h1>
                    </div>
                    <div>
                        <img src={Audio} alt="Outdoors"/>
                        <h1>Audio-Paired</h1>
                    </div>
                    <div>
                        <h1>Minimalistic</h1>
                    </div>
                    <div>
                        <img src={Wildcard} alt="Outdoors"/>
                        <h1>Wild Card</h1>
                    </div>
                </div>
            </section>

            <section className="filler"/>

            <Footer />
        </>
    );
};

export default DesignHome;
