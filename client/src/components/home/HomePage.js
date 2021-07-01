import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { roadmapSteps } from "../../services/SampleData";
import cardServices from "../../services/cardServices";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Loading from "../utilities/Loading";
import Slideshow from "./Slideshow";
import "./HomePage.scss";

const HomePage = () => {
    const [featuredContent, setContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const data = await cardServices.getFeaturedCards();
            setContent(data);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <div className="home-outer-container">
                <div className="home-spacer" />

                <div className="home-inner-container">
                    <div className="home-left">
                        <h1>Design is Everywhere.</h1>
                        <p>
                            It's on your desk, on the web, and out in the wild. Let us
                            help you inject some creative design into your daily life.
                        </p>
                        <Link to="/Profile"><button>Get Started</button></Link>
                        <Link to="/Gallery"><button className="delay">More Designs</button></Link>
                    </div>

                    <div className="home-right">
                        <Slideshow featuredArray={featuredContent} />
                    </div>
                </div>
            </div>

            <div className="roadmap-container">
                <div className="roadmap-opener">
                    <p>Roadmap</p>
                    <h1>How should I use Design.io?</h1>
                    <p>
                        That's a great question. Let us take you through some of the major features of 
                        Design.io.
                    </p>
                </div>
                {roadmapSteps.map((obj, idx) => (
                    <div className="roadmap-items" key={idx}>
                        <div className="left-image">
                            <img src={obj.image} alt="site preview"/>
                        </div>
                        <div className="right-text">
                            <div className="text-wrapper">
                                <h1>{obj.header}</h1>
                                <p>{obj.desc}</p>
                                <Link to={obj.link}>
                                    <button>Go!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="home-spacer whitesmoke"></div>
            
            <Footer />
        </>
    );
};

export default HomePage;
