import React, { useState, useEffect, useContext } from "react";
import { Link, Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../utilities/UserContext";
import { AddDesignImg } from "../../services/SampleData";
import { useClickOutside } from "../utilities/useClickOutside";
import Loading from "../utilities/Loading"
import cardServices from "../../services/cardServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Card from "../card/Card";
import GalleryDisplay from "./GalleryDisplay";
import './GalleryCategory.scss'


const LargeCard = ({setBlur}) => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const cardRef = useClickOutside(() => {
        history.replace(`/Gallery/${category}`);
    });

    const { id, category } = useParams(); 

    useEffect(() => {
        setBlur(true); setLoading(true);
        const getData = async () =>{
            const data = await cardServices.getOneCard(id);
            setContent(data);
        }
        getData();
        setLoading(false);

        return () => {
            setBlur(false);
        };
    }, []);

    if(loading)
        return <h2>Loading</h2>

    return(
        <div className="large-card" ref={cardRef}>
            <Card content={content} config="slideshow"/>
        </div>
    )
}

const GalleryCategory = () =>{
    const {user} = useContext(UserContext);
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [blur, setBlur] = useState(false);

    const {path} = useRouteMatch();
    let { category } = useParams();     

    useEffect(() => {
        setLoading(true);

        const setData = async () => {
            const data = await cardServices.getCategoryCards(category);
            setGalleryData(data);
            setLoading(false);
        };

        setData();
    },[user]); 


    if(loading)
        return <Loading/>

    return (
        <>
            <Header />
            <div className={`gallery-container ${blur ? "blur" : ""}`}>
                <section className="gallery-welcome-text">
                    <div>
                        <div className="gallery-welcome-spacer"></div>
                        <h1>Welcome to the {category} Design Gallery</h1>
                        <p>We're glad you're taking design {category}. You can do some amazing things there.</p> 
                    </div>
                </section>

                <GalleryDisplay galleryData={galleryData} cardLink={true}/>
            </div>

            <section className="card-popup">
                <Route path={`${path}/:id`}>
                    <LargeCard setBlur={setBlur}/>
                </Route>
            </section>

            <div className={`submit-teaser ${blur ? "blur" : ""}`}>
                <div className="teaser-left">
                    <p>Put yourself out there</p>
                    <h1>Have a design to share?</h1>
                    <p>It's easy and there's no pressure. We believe all designs have the potential to inspire.</p>
                    <button>
                        <Link to='/Profile'>Submit your design</Link>
                    </button> 
                </div>

                <div className="teaser-right">
                    <img src={AddDesignImg} alt="submit form screenshot" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GalleryCategory;
