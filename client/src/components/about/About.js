import React from "react";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./About.scss";

const teamMembers = [
    { name: "Dee Signer", role: "UI/UX Designer" },
    { name: "Ray Act", role: "Frontend Developer" },
    { name: "Dan Mongo", role: "Database Engineer" },
    { name: "Noda Esper", role: "Backend Engineer" },
];

const About = () => {
    return (
        <>  
            <Header />
            <div className="wrapper">
                <div className="fill-5"></div>
                <div className="fill-top">
                    <div className="left">
                        <h1>About Design.io</h1>
                        <p>We think about designs. We also think about you.</p>
                        <ul className="fa-ul">
                            <li><span ><i class="fas fa-angle-double-right"/></span><a href="#mission">Our Mission</a></li>
                            <li><span><i class="fas fa-angle-double-right"/></span><a href="#vision">Our Vision</a></li>
                            <li><span><i class="fas fa-angle-double-right"/></span><a href="#process">Our Process</a></li>
                            <li><span><i class="fas fa-angle-double-right"/></span><a href="#team">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
            
            <div className="text-container">
                <div className="left"></div>

                <div className="right">
                    <section className="text-item" id="mission">
                        <div><i class="fas fa-map-marked fa-2x"></i></div>
                        <h1>Our Mission</h1>
                        <p>Everything in the physical world has been designed, whether it was carefully considered or not.
                                    Think about how your bed is placed in your bedroom and which apps are on your phone's home screen.
                                    Here at Design.io, our mission is to increase your awareness of designs all around you.
                                    We want to inspire your next design big or small,
                                    so you can point to things and say: <b>Hey, I designed that.</b>
                        </p>
                    </section>
                    <section className="text-item" id="vision">
                        <div><i class="fas fa-glasses fa-2x"></i></div>
                        <h1>Our Vision</h1>
                        <p>We want 
                                Design.io to be a platform where people will come to look at designs for inspiration. 
                                We hope to facilitate "cross-disciplinary" inspiration. We firmly believe that
                                interior room design may inspire an outdoor design. Design.io is NOT 
                                social media. There are no likes, followers, comments, or subscribers. We're simply focused on design and inspiration.
                            </p>
                    </section>
                    <section className="text-item" id="process">
                        <div><i class="fas fa-hammer fa-2x"></i></div>
                        <h1>Our Process</h1>
                        <p>Interested in how Design.io was built? Check out some documentation on Github.</p>
                        <a href="https://github.com/ogao9/art-fair" target='_blank' rel="noreferrer"><button><i class="fab fa-github"/>Github</button></a>
                    </section>
                </div>
            </div>

            <div className="team-container" id="team">
                <div>
                    <div className="team-header">
                        <div><i class="fas fa-users fa-3x"></i></div>
                        <h1>Our Team</h1>
                        <div className="metrics">
                            <h1><span className="num">4</span> People</h1>
                            <h1><span className="num">4</span> Laptops</h1>
                            <h1><span className="num">1</span> Goal</h1>
                        </div>
                    </div>
                
                    <div className="member-container">
                        {teamMembers.map((value, index)=>(
                            <section className="member-card">
                                <i class="fas fa-user-tie fa-5x"></i>
                                <h1>{value.name}</h1>
                                <p>{value.role}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default About;

