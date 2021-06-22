import React, {useState} from "react";
import { Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Outdoors from '../../images/outdoors.jpg'
import Indoors from '../../images/indoors.jpg'
import Digital from '../../images/digital.jpg'
import Audio from '../../images/audio.jpg'
import Minimal from '../../images/minimal.jpg'
import Wildcard from '../../images/wildcard.jpg'
import "./Gallery.scss";
import {GalleryCategory} from "./GalleryCategory"


const Gallery = () => {
    const {path, url} = useRouteMatch(); //url is the actual current url while path contains the pattern of current URL

    return (
        <>
            <Header />
            <Switch>
                <Route path={`${path}/:category`}> 
                    <GalleryCategory/>
                </Route>
                <Route path={`${path}`}>
                    <GalleryHome/>
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Gallery;



function GalleryHome(){
    const categories = [
        {name: 'Indoor', image: Indoors},
        {name: 'Outdoor', image: Outdoors},
        {name: 'Digital', image: Digital},
        {name: 'Minimal', image: Minimal},
        {name: 'Audio', image: Audio},
        {name: 'Wildcard', image: Wildcard},
    ]

    return(
        <>
            <section className="designhome-welcome">
                <div className="welcome-text">
                    <h1>Find your inspiration. Find your design.</h1>
                    <p>
                        Choose from 5 broad categories or take a chance with the
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
        </>
    )
}
