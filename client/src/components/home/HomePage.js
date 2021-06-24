import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./HomePage.scss";

const roadmapSteps = [
    { desc: "Check out featured designs with expert analysis", link: <Link to='/Featured'/>},
    { desc: "Get inspired by more designs in the Gallery",  link: <Link to='/Gallery'/> },
    { desc: "Create an account to save your favorite designs", link: <Link to='/Login'/> },
    { desc: "Submit your own designs to inspire others",  link: <Link to='/profile'/> },
    { desc: "Discuss interesting designs on the Forums",  link: <Link to='/Forum'/> },
    { desc: "Deploy an inspired design into the real-world. Repeat.", link: <a href="#"/>},
];

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home-welcome">
                <div className="welcome-message">
                    <h1>Get Inspired</h1>
                    <p>
                        Design is everywhere. It's on your desk, in your bedroom, and out
                        in the wild. Let us help you inject some creative design into your
                        daily life.
                    </p>
                    <Link to="/Gallery">
                        <button className="big-discover-button">Discover</button>
                    </Link>
                </div>
            </div>

            <div className="roadmap-container">
                <div className="roadmap-message">
                    <div>
                        <i class="fas fa-compass fa-10x"/>
                    </div>
                    <h1>How to use Design.io</h1>
                    <p>A roadmap to guide you on your design journey</p>
                </div>

                <div className="roadmap-flow">
                    {roadmapSteps.map((value, index) => (
                        <div className="flow-item" key={index}>
                            {value.link}
                            <p>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
