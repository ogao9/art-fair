import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import Slideshow from "./Slideshow"
import Card from "../design-home/Card"
import SampleData from './Sample'
import './Feature.scss'


const Feature = () => {
    const [featuredContent, setContent] = useState(SampleData);

    useEffect(()=>{
        const getData = async ()=>{
            const data = await null
            setContent(data)
        }
        //getData();
        console.log("Feature useEffect Called")
    },[])
    
    return (
        <>
            <Header/>
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

            <div id="analysis" className="feature-analysis">
                <h1>Welcome to the Expert Analysis</h1>

                {featuredContent.map((value, index)=>(
                    <section className="analysis-item" key={index}>
                        <div className="analysis-card">
                            <Card content={value} impactbtn={null}/>
                        </div>
                        <p>{value.description}</p>
                    </section>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Feature
