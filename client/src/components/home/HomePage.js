import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import cardServices from '../../services/cardServices'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Loading from "../utilities/Loading";
import Slideshow from '../featured/Slideshow';
import { roadmapSteps } from '../../services/SampleData';
import "./HomePage.scss";


const HomePage = () => {
    const [featuredContent, setContent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const getData = async ()=>{
            const data = await cardServices.getFeaturedCards();
            setContent(data);
            setLoading(false)
        }
        getData();
    },[])

    if(loading)
        return <Loading/>

    return (
        <>
            <div className="top-wrapper">
                <Header/>
                <div className="feature-spacer"/>

                <div className="feature-container">
                    <div className="feature-left">
                        <h1>Design is everywhere.</h1>
                        <p>
                        It's on your desk, on the web, and out in the wild.
                        Let us help you inject some creative design into your daily life.
                        </p>
                        <button className="animated"><Link to="/Profile">Get Started</Link></button>
                        <button className="static"><Link to='/Gallery'>More Designs</Link></button>
                    </div>

                    <div className="feature-right">
                        <Slideshow featuredArray={featuredContent}/>
                    </div>
                </div>
            </div>

            <div className="roadmap-opener">
                <h1><i class="fas fa-compass fa-lg"></i>How should I use Design.io?</h1>
                <p>That's a great question. Let us walk you through a sample roadmap to get you started on your design journey</p>
            </div>

            {roadmapSteps.map((obj, idx)=>(
                <div className="roadmap-test">
                <div className="left-image"><img src={obj.image}/></div>
                <div className="right-text">
                    <div className="text-wrapper">
                        <h1>{obj.header}</h1>
                        <p>{obj.desc}</p>
                        <Link to={obj.link}><button>Go!</button></Link>
                    </div>
                </div>
                </div>
            ))}
            <Footer />
        </>
    );
};

export default HomePage;

