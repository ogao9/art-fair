import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./HomePage.scss";

const roadmapSteps = [
    { desc: "Check out featured designs with expert analysis", route: "/Feature" },
    { desc: "Get inspired by more designs in the Gallery", route: "/DesignHome" },
    { desc: "Create an account to save your favorite designs", route: "/Login" },
    { desc: "Submit your own designs to inspire others", route: "/Profile" },
    { desc: "Discuss interesting designs on the Forums", route: "/Forum" },
    { desc: "Deploy an inspired design into the real-world. Repeat" },
];

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home-welcome">
                <div className="welcome-message">
                    <h1>Get Inspired</h1>
                    <p>
                        Design is everywhere. It's on your desk, in your bedroom, and on
                        your phone. Let us help you inject some creative design into your
                        daily life.
                    </p>
                    <Link to="/DesignHome">
                        <button className="big-discover-button">Discover</button>
                    </Link>
                </div>
            </div>

            <div className="roadmap-container">
                <div className="roadmap-message">
                    <div>
                        <i class="fas fa-compass" />
                    </div>
                    <h1 className="big-text">How to use Design.io</h1>
                    <p>A roadmap to guide you on your design journey</p>
                </div>

                <div className="roadmap-flow">
                    {roadmapSteps.map((value, index) => (
                        <div className="flow-item" key={index}>
                            <Link to={value.route} />
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
