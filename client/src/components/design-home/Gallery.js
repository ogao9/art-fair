import React from "react";
import { Link, Route, Switch, useRouteMatch,} from "react-router-dom";
import { CategoryRoute } from "../utilities/CustomRoutes";
import { Categories, AddDesignImg } from "../../services/SampleData";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import GalleryCategory from "./GalleryCategory"
import "./Gallery.scss"

const GalleryHome = ()=>{
    return(
        <>  
            <Header />
            <section className="galleryhome-welcome">
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
            <Footer/>
        </>
    )
}

const Gallery = () => {
    const {path} = useRouteMatch(); 
    return (
        <>
            <Switch>
                <CategoryRoute path={`${path}/:category`}> 
                    <GalleryCategory/>
                </CategoryRoute>
                <Route path={`${path}`}>
                    <GalleryHome/>
                </Route>
            </Switch>
        </>
    );
};

export default Gallery;