import React from "react";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./About.css";

const About = () => {
    return (
        <div className="component-container">
            <Header />
            <div className="about-container">
                <div className="about-container left">
                    <h1>About Design.io</h1>
                </div>
                <div className="about-container right">
                    <section className="about-container item">
                        <h1>Our Mission</h1>
                        <p>Everything in the physical world has been designed, whether that be deliberate or not.
                            Think about how your bed is placed in your bedroom. Was that an intentional choice?
                            Here at design.io, we want to inspire your next design,
                            so you can point to things and say "Hey, I designed that."
                        </p>
                    </section>
                    <section className="about-container item">
                        <h1>Our Vision</h1>
                        <p>We have a vision for how design.io will be used. We want to share that with you now.
                        --Under Construction --
                        </p>
                    </section>
                    <section className="about-container item">
                    <h1>Humane Technology Statement</h1>
                    <p>As humans, we love tools that make our lives easier. Think about the cup that makes drinking water such a 
                    relaxing experience. However, in this digital age, many things that claim to make out lives easier
                    have alterior motives. I'm mainly talking about social media.
                    A tool sits there simply waiting to be used. Social media pokes and prods, manipulating you
                    every minute you use it. Design.io seeks to break out of that model.
                    </p>
                    </section>
                </div>
            </div>

            
            <Footer/>
        </div>
    );
};

export default About;

