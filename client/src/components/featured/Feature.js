import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Slideshow from "./Slideshow"
import Card from "../design-home/Card"
import SampleData from './Sample'
import './Feature.scss'


const Feature = () => {
    const [featuredContent, setContent] = useState(SampleData);
    const [currentCard, setCurrentCard] = useState(0);
    const [analysisobj, setAnalysis] = useState(featuredContent[0].expertAnalysis);
    const scrollNext = useRef(null);

    useEffect(()=>{
        //make a call to the lead expert and get card ids
        //get those cards and set featured Content
        
        const getData = async ()=>{
            const data = await null
            setContent(data)
        }
        //getData();
        console.log("Feature useEffect Called")
    },[])

    const scrollRight = ()=>{
        scrollNext.current.scrollLeft += 500;
    }
    const scrollLeft = ()=>{
        scrollNext.current.scrollLeft -= 500;
    }

    const getAnalysis = () =>{
        let items = [];
        for (const name in analysisobj){
            let analysis = analysisobj[name]
            items.push(<li><span><i class="fas fa-user-tie"/> {name}:</span> {analysis} </li>)
        }
        return items;
    }

    const setActive = (idx, e) =>{
        setCurrentCard(idx);
        setAnalysis(featuredContent[idx].expertAnalysis);
    }

    return (
        <>
            <div className="fill-screen">
                <Header/>

                <div className="top-spacer"></div>
                <div className="feature-container">
                    <div className="feature-left">
                        <h1>Check out this week's <br/>featured designs!</h1>
                        <p>Handpicked by our experts</p>
                        <button><a href='#analysis'>View Analysis</a></button>
                        <button><Link to='/DesignHome'>More Designs</Link></button>
                    </div>

                    <div className="feature-right">
                        <Slideshow featuredArray={featuredContent}/>
                    </div>
                </div>
            </div>

            <div className="analysis" id='analysis'>
                <div className="flex-center">
                    <div className="expert-header">
                        <h1><i class="far fa-edit"/>Expert Analysis</h1>
                        <p>See what our experts had to say about this week's featured works.</p>
                    </div>

                    <div className="analysis-slides">
                        <div className="analysis-cards" ref={scrollNext}>
                            {
                            featuredContent.map((val, idx)=>(
                                <div className={`analysis-card ${idx===currentCard ? "active" : null}`} onClick={(e)=>setActive(idx, e)}>
                                    <Card content={val} image={val.img} key={idx}/>
                                </div>
                            )) 
                            } 
                        </div>                     

                        <button type="button" className="btn-left" onClick={scrollLeft}><i class="fas fa-chevron-left fa-3x"/></button>
                        <button type="button" className="btn-right" onClick={scrollRight}><i class="fas fa-chevron-right fa-3x"/></button>
                    </div>

                    <div className="analysis-text">
                        <ul>{getAnalysis()}</ul>
                    </div>
                </div>

                
            </div>
   
            <Footer/>
        </>
    )
}

export default Feature
