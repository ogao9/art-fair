import React from 'react'

const SlideshowCard = ({content}) => {
    return (
        <div className="slideshow-card">
            <img src={content.img} alt="Digital"/>
            <div>
                <div className="text-flex">
                    <h2>{content.title ? content.title : "Title"}</h2>
                    <span>#Inpsired: {content.impact}</span>
                </div>
                <div className="text-flex">
                    <h4>{content.creator ? content.creator : "Username"}</h4>
                    <span>Circular Tag</span>
                </div>
            </div>
        </div>
    )
}

export default SlideshowCard

{/* <div className="SampleCardzc">
        //     <img src={content.img} alt="featured design image"></img>
        //     <div className="card-text">
        //         <h2>{content.title ? content.title : "Title"}</h2>
        //         <h4>{content.creator ? content.creator : "Creator Name"}</h4>
        //         <p>{content.description ? content.description : "Description"}</p>
        //     </div>

        //     <button>
        //         This inspired me
        //     </button>
        //     <button>Play Audio Pairing</button>
        // </div> */}