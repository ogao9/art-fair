import React from 'react'

const SlideshowCard = ({content}) => {
    return (
        <div className="SampleCardzc">
            <img src={content.img}></img>
            <div className="card-text">
                <h2>{content.title ? content.title : "Title"}</h2>
                <h4>{content.creator ? content.creator : "Creator Name"}</h4>
                <p>{content.description ? content.description : "Description"}</p>
            </div>

            <button>
                This inspired me
            </button>
            <button>Play Audio Pairing</button>
        </div>
    )
}

export default SlideshowCard
