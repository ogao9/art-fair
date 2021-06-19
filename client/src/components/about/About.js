import React from "react";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./About.scss";

const teamMembers = [
    { name: "Re Act", role: "Frontend Developer" },
    { name: "De Signer", role: "UI/UX Designer" },
    { name: "Dan Mongo", role: "Database Engineer" },
    { name: "Node Exp", role: "Backend Engineer" },
];


const About = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                <div className="about-container left">
                    <h1>About Design.io</h1>
                </div>
                <div className="about-container right">
                    <section className="item">
                        <h1>Our Mission</h1>
                        <p>Everything in the physical world has been designed, whether that be deliberate or not.
                            Think about how your bed is placed in your bedroom. Was that an intentional choice?
                            Here at design.io, we want to inspire your next design,
                            so you can point to things and say "Hey, I designed that."
                        </p>
                    </section>
                    <section className="item">
                        <h1>Our Vision</h1>
                        <p>We have a vision for how design.io will be used. We want to share that with you now.
                            Design.io is a platform where people will come to look at designs for inspiration. 
                            We hope to facilitate "cross-disciplinary" inspiration. What we mean by this is that an 
                            interior room design may inspire an outdoor design. Design.io is NOT 
                            social media. There are no likes, followers, comments, or subscribers.
                        </p>
                    </section>
                    <section className="item">
                        <h1>Our Process</h1>
                        <p>Interested in how Design.io was built? Click Here! </p>
                    </section>
                </div>
            </div>

            <div className="team-container">
                <h1>Our Team</h1>
                <div className="member-container">
                {teamMembers.map((value, index)=>(
                    <section className="member-card">
                        <i class="fas fa-user-tie"></i>
                        <h1>{value.name}</h1>
                        <p>{value.role}</p>
                    </section>
                ))}
                </div>
            </div>
            
            
            <Footer/>
        </>
    );
};

export default About;

