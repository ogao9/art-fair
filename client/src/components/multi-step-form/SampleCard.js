import React from "react";
import { useState, useRef } from "react";
import Orange from "../../images/oranges.jpg";
import Balloon from '../../images/balloons.jpg'
import Jazz from "../../images/Jazz.mp3";

const Card = ({ content, impactbtn, deletebtn }) => {

    //Briefly Explain useRef
    const audio = useRef(null);

    const playAudio = () =>{
      audio.current.play();
    }

    //Could Consider some Default text

    return (
        <div className="SampleCard">
            <h3>{content.title}</h3>
            <img src={content.impact? Orange : Balloon}></img>
            <h5>{content.creator}</h5>
            <p>{content.description}</p>
            <p>Current Impact: {content.impact}</p>
            <button onClick={() => impactbtn(content._id)}>Increase Impact</button>
            <button onClick={() => deletebtn(content._id)}>Delete This Card</button>
            <button onClick={playAudio}>Play Audio Pairing</button>
              <audio src={Jazz} ref={audio}></audio>
        </div>
    );
};

export default Card;