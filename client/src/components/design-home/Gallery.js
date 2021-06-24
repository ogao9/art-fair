import React from "react";
import { Link, Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import {GalleryCategory} from "./GalleryCategory"
import { Categories } from "../../services/SampleData";
import "./Gallery.scss";

function CategoryRoute({children, path}){
    const categories = ["Indoor", "Outdoor", "Digital", "Audio", "Wildcard", "Minimal"]
    const validCategory = categories.includes("") ? true : true;

    return(
        <Route path={path} render={()=>{
            return validCategory
                ? children
                : <Redirect to='/Gallery'/>
        }} />
    )
}

const Gallery = () => {
    const {path, url} = useRouteMatch(); //url is the actual current url while path contains the pattern of current URL

    return (
        <>
            <Header />
            <Switch>
                <CategoryRoute path={`${path}/:category`}> 
                    <GalleryCategory/>
                </CategoryRoute>
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
                    {Categories.map((category) => (
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
