import React, {useState, useEffect} from 'react'
import SlideshowCard from './SlideshowCard'
import Orange from '../../images/oranges.jpg'
import Balloon from '../../images/balloons.jpg'
import Logo from '../../images/logo2.png'
import './Slideshow.css'

const Slideshow = () => {
    const [currentSlide, setSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSlide(currentSlide+1)
        }, 2000) //schedules a new interval to run every 5 seconds
        return () => clearInterval(interval); //runs when component unmounts
    },[])

    const sampleContent = [{
        title: "Card 1",
        creator: "Creator 1",
        description: "Description 1",
        impact: 2,
        _id: "65",
        img: Orange,
    },
    {
        title: "Card 2",
        creator: "Creator 2",
        description: "Description 2",
        impact: 3,
        _id: "66",
        img: Balloon,
    },
    {
        title: "Card 3",
        creator: "Creator 3",
        description: "Description 3",
        impact: 4,
        _id: "67",
        img: Logo,
    },
    {
        title: "Card 4",
        creator: "Creator 4",
        description: "Description 4",
        impact: 24,
        _id: "69",
        img: Balloon,
    }];

    const nextSlide = () =>{
        if(currentSlide===sampleContent.length-1)
            setSlide(0)
        else
            setSlide(currentSlide+1)
    }
    const prevSlide = () =>{
        if(currentSlide===0)
            setSlide(sampleContent.length-1)
        else
            setSlide(currentSlide-1)
    }

    return (
        <div className="slideshow-container">
            <SlideshowCard content={sampleContent[currentSlide]}/>
            <button onClick={prevSlide} className="left-arrow"><i class="fas fa-arrow-circle-left"></i></button>
            <button onClick={nextSlide} className="right-arrow"><i class="fas fa-arrow-circle-right"></i></button>
        </div>
    )
}

export default Slideshow
