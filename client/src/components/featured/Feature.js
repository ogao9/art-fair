import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import cardServices from '../../services/cardServices'
import Speaker from "../../images/speaker.png"
import Header from "../headfoot/Header"
import Footer from "../headfoot/Footer"
import Loading from '../utilities/Loading'
import Card from "../design-home/Card"
import './Feature.scss'

const Feature = () => {
    const [featuredContent, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);
    const scrollNext = useRef(null);

    useEffect(()=>{
        setLoading(true);
        const getData = async ()=>{
            const data = await cardServices.getFeaturedCards();
            setContent(data);
            setLoading(false); //Put this here instead of after getData() because getData() simply places the fucntion on the call stack
        }
        getData();
    },[])

    const scrollRight = ()=>{
        scrollNext.current.scrollLeft += 316;
    }
    const scrollLeft = ()=>{
        scrollNext.current.scrollLeft -= 316;
    }

    const getAnalysis = (content) =>{
        const items = [];
        content.expertAnalysis.map(obj=>{
            for (const name in obj)
                items.push(
                    <li>
                        <div>
                            <h2><i class="fas fa-user-tie fa-sm" /> {name}</h2>
                            <p>{obj[name]}</p>
                        </div>
                    </li>
                );
        })
        return items;
    }

    const setActive = (idx, e) =>{
        setCurrentCard(idx);
    }

    if(loading)
        return <Loading/>

    return (
        <>
            <Header/>
            <div className="feature-spacer"></div>

            <div className="feature-top">
                <div className="left-text">
                    <h1>Check out this week's featured designs!</h1>
                    <p>Handpicked by our experts and accompanied by expert analysis</p>
                    <a href='#analysis'><button>View Analysis</button></a>
                    <Link to="/Gallery"><button >More Designs</button></Link>
                </div>
                <div className="right-image">
                    <img src={Speaker} alt="featured"/>
                </div>
            </div>

            <div className="feature-slides-container">
                <div className="feature-slides-track">
                    <h2 className="title">Expert Picks</h2>

                    <div className="feature-cards" ref={scrollNext}>
                    {
                    featuredContent.map((val, idx)=>(
                        <div key={idx} className={`feature-card ${idx===currentCard ? "active" : null}`} onClick={(e)=>setActive(idx, e)}>
                            <Card content={val}/>
                        </div>
                        ))
                    }
                    </div>

                    <button type="button" className="btn-left" onClick={scrollLeft}><i class="fas fa-chevron-left fa-3x"/></button>
                    <button type="button" className="btn-right" onClick={scrollRight}><i class="fas fa-chevron-right fa-3x"/></button>
                </div>
            </div>
            
            <div className="analysis-spacer"></div>

            <div className="analysis-opener" id="analysis">
                <div className="text-wrapper">
                    <p>Expert Analysis</p>
                    <h1>See what the experts think</h1>
                    <p>
                        Just remember that everyone has different tastes 
                        and that's a beautiful thing.
                    </p>
                </div>
            </div>
            
            <div className="analysis-container">
            {
                featuredContent.slice(0,3).map(content=>(
                <div className="analysis-section" key={content._id}>
                    <div className="left-card">
                        <Card content={content}/>
                    </div>
                    <div className="right-text">
                        <p>Expert Analysis</p>
                        <ul>{getAnalysis(content)}</ul>
                    </div>
                </div>
                ))
            }
            </div>

            <div className="analysis-spacer"></div>
            <Footer/>
        </>
    )
}

export default Feature
