import React, { useRef } from "react";
import Balloon from "../../images/balloons.jpg";
import Jazz from "../../images/Jazz.mp3";

const Card = ({ content, impactbtn}) => {
    //Briefly Explain useRef
    const audio = useRef(null);
    const playAudio = () => {
        audio.current.play();
    };

    return (
        <div className="SampleCardzc">
            <img src={Balloon} alt="uploaded image"></img>
            <div className="card-text">
                <h2>{content.title ? content.title : "Title"}</h2>
                <h4>{content.creator ? content.creator : "Creator Name"}</h4>
                <p>{content.description ? content.description : "Description"}</p>
            </div>

            <button onClick={() => impactbtn(content.id)}>This inspired me</button>
            <button onClick={playAudio}>
                Play Audio Pairing
                <audio src={Jazz} ref={audio} />
            </button>
        </div>
    );
};

export default Card;

