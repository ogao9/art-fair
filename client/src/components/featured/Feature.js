import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import cardServices from '../../services/cardServices'
import Header from "../headfoot/Header"
import Footer from "../headfoot/Footer"
import Loading from '../utilities/Loading'
import Slideshow from "./Slideshow"
import Card from "../design-home/Card"
import './Feature.scss'
//import {FeatureSample} from '../../services/SampleData'

const Feature = () => {
    const [featuredContent, setContent] = useState([]);
    const [analysis, setAnalysis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);
    const scrollNext = useRef(null);

    useEffect(()=>{
        setLoading(true);
        const getData = async ()=>{
            const data = await cardServices.getFeaturedCards();
            setContent(data);
            setAnalysis(data[0].expertAnalysis); //expertAnalysis is an array of objects
            setLoading(false)
        }
        getData();
    },[])

    const scrollRight = ()=>{
        scrollNext.current.scrollLeft += 316;
    }
    const scrollLeft = ()=>{
        scrollNext.current.scrollLeft -= 316;
    }

    const getAnalysis = () =>{
        let items = [];
        analysis.map(obj=>{
            for(const name in obj)
                items.push(<li><span><i class="fas fa-user-tie"/> {name}: {obj[name]}</span> </li>)
        })
        return items;
    }

    const getExperts = () =>{
        let items = [];
        analysis.map(obj=>{
            for (const name in obj){
                items.push(<li><span><i class="fas fa-user-tie"/> {name}</span> </li>)
            }
        })
        return items;
    }

    const setActive = (idx, e) =>{
        setCurrentCard(idx);
        setAnalysis(featuredContent[idx].expertAnalysis);
    }

    if(loading)
        return <Loading/>

    return (
        <>
            <div className="fill-screen">
                <Header/>
                <div className="feature-spacer"/>

                <div className="feature-container">
                    <div className="feature-left">
                        <h1>Check out this week's <br/>featured designs!</h1>
                        <p>Handpicked by our experts</p>
                        <button><a href='#analysis'>View Analysis</a></button>
                        <button><Link to='/Gallery'>More Designs</Link></button>
                    </div>

                    <div className="feature-right">
                        <Slideshow featuredArray={featuredContent}/>
                    </div>
                </div>
            </div>

            <div className="feature-spacer"></div>

            <div className="analysis-container" id="analysis">
                    <div className="left-experts">
                        <h1><i class="far fa-edit"/>Expert Analysis</h1>
                        <p>See what our experts had to say about this week's featured works.</p>
                        <ul>{getExperts()}</ul>
                    </div>

                    <div className="right-slides">
                        <div className="analysis-cards" ref={scrollNext}>
                        {
                        featuredContent.map((val, idx)=>(
                            <div key={idx} className={`analysis-card ${idx===currentCard ? "active" : null}`} onClick={(e)=>setActive(idx, e)}>
                                <Card content={val}/>
                            </div>
                            ))
                        }
                        </div>
                        <button type="button" className="btn-left" onClick={scrollLeft}><i class="fas fa-chevron-left fa-3x"/></button>
                        <button type="button" className="btn-right" onClick={scrollRight}><i class="fas fa-chevron-right fa-3x"/></button>
                    </div>
            </div>

            <div className="analysis-text-container">
                <div className="filler"></div>
                <div className="text">
                    <ul>{getAnalysis()}</ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Feature
