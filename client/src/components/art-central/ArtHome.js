import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./ArtCentral.css";

const ArtHome = () => {
    return (
        <div>
            <Header />
            <section className="ArtCentralWelcome">
                <h1>Welcome to DesignCentral</h1>
            </section>

            <div className="art-home grid-container">
                <div>
                    <button
                        style={{
                            backgroundColor: "black",
                            padding: "15px",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/ArtCentral">Outdoor</Link>
                    </button>
                </div>
                <div>
                <button
                        style={{
                            backgroundColor: "black",
                            padding: "15px",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/ArtCentral">Indoor</Link>
                    </button>
                </div>
                <div>
                <button
                        style={{
                            backgroundColor: "black",
                            padding: "15px",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/ArtCentral">Modern Art</Link>
                    </button>
                </div>
                <div>
                <button
                        style={{
                            backgroundColor: "black",
                            padding: "15px",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/ArtCentral">Audio-Paired Art</Link>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ArtHome;
