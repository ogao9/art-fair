import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Outdoors from '../../images/outdoors.jpg'
import Indoors from '../../images/indoors.jpg'
import Digital from '../../images/digital.jpg'
import Audio from '../../images/audio.jpg'
import Minimal from '../../images/minimal.png'
import Wildcard from '../../images/wildcard.jpg'
import "./DesignHome.scss";

const DesignHome = () => {
    const categories = [
        {name: 'Indoor', image: Indoors},
        {name: 'Outdoor', image: Outdoors},
        {name: 'Digital', image: Digital},
        {name: 'Minimal', image: Minimal},
        {name: 'Audio', image: Audio},
        {name: 'Wildcard', image: Wildcard},
    ]

    return (
        <>
            <Header />
            <section className="designhome-welcome">
                <div className="welcome-text">
                    <h1>Find your inspiration. Find your design.</h1>
                    <p>
                        Choose from our 5 pre-defined categories or take a chance with the
                        wild card.
                    </p>
                </div>
            </section>

            <section className="category-container">
                <div className="category-grid">
                    {categories.map((category) => (
                        <div className="category-grid-item">
                            <img src={category.image} alt="Category Image" />
                            <h1>{category.name}</h1>

                            <div className="overlay">
                                <Link to={`/Gallery/${category.name}`} />
                                <h2>Click to Enter</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DesignHome;


