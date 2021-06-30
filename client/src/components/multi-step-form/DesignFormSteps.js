import React from "react";
import DarkLogo from "../../images/LogoDark.png"
import Card from '../design-home/Card'


const DesignCategory = ({nextStep, closebtn, userInput, handleChange}) => {
    return (
        <div className="form-container">
            <div className="form-left">
                <img className="logo" src={DarkLogo} alt="logo" />
                <div className="left-form-container">
                    <div className="text-header">
                        <h1>Pick a category for your design</h1>
                        <p>
                            Unsure which category your design falls in? Choose Wildcard.
                        </p>
                    </div>
                    <form>
                        <div className="radio">
                            <input
                                type="radio"
                                id="indoor"
                                value="Indoor"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Indoor"}
                            />
                            <label for="indoor">Indoor</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                id="outdoor"
                                value="Outdoor"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Outdoor"}
                            />
                            <label for="outdoor">Outdoor</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                id="digital"
                                value="Digital"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Digital"}
                            />
                            <label for="digital">Digital</label>
                        </div>
                        <div className="radio"> 
                            <input
                                type="radio"
                                id="minimal"
                                value="Minimal"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Minimal"}
                            />
                            <label for="minimal">Minimal</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                id="web"
                                value="Web"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Web"}
                            />
                            <label for="audio">Web</label>
                        </div>
                        <div className="radio">
                            <input
                                type="radio"
                                id="wildcard"
                                value="Wildcard"
                                onChange={(e) => handleChange("category", e)}
                                checked={userInput.category==="Wildcard"}
                            />
                            <label for="wildcard">Wildcard</label>
                        </div>
                    </form>
                    <div className="button-group">
                        <button onClick={closebtn} type="button"><i class="far fa-window-close"/>Close</button>
                        <button onClick={nextStep} >Next<i class="fas fa-arrow-right"/></button>
                    </div>
                </div>
            </div>

            <div className="form-right"></div>
        </div>
    );
}


const DesignDetails = ({ nextStep, prevStep, userInput, handleChange }) => {
    return (
        <div className="form-container">
            <div className="form-left">
                <img className="logo" src={DarkLogo} alt="logo"/>
                <div className="left-form-container">
                    <div className="text-header">
                        <h1>Some Details</h1>
                        <p>Creative titles are encouraged 
                            and we'd love to hear the motivations behind your design.
                        </p>
                    </div>
                    <form onSubmit={nextStep}>
                        <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={userInput.title}
                            onChange={(e) => handleChange("title", e)}
                            maxLength="20"
                            required
                        ></input>

                        <textarea value={userInput.description}
                        onChange={(e) => handleChange("description", e)}
                        placeholder="Description"
                        maxLength="200"
                        required/>
                            
                        <div className="button-group">
                            <button onClick={prevStep} type="button"><i class="fas fa-arrow-left"/>Back</button>
                            <button type="submit">Next<i class="fas fa-arrow-right"/></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="form-right"></div>
        </div>
    );
};

const DesignUpload = ({ nextStep, prevStep, handleChange, userInput }) => {
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    //Implement Later
    // const fileInput = useRef(null); 
    // const [filename, setFileName] = useState("No File Chosen");

    // const handleUpload = (e) => {
    //     console.log(fileInput.current);
    //     setFileName(fileInput.current.files[0].name);
    //     handleChange(filename, e);
    // };

    return (
        <div className="form-container">
            <div className="form-left">
                <img className="logo" src={DarkLogo} alt="logo" />
                <div className="left-form-container">
                    <div className="text-header">
                        <h1>Submit a link to an image of your design</h1>
                        <p>Direct File Upload Coming Soon</p>
                    </div>

                    <form onSubmit={nextStep}>
                        <input
                            type="text"
                            value={userInput.image}
                            onChange={(e) => handleChange("image", e)}
                            placeholder="Image Address"
                            required
                        />

                        <div className="button-group">
                            <button onClick={prevStep} type="button">
                                <i class="fas fa-arrow-left" />
                                Back
                            </button>
                            <button>
                                {" "}
                                Next
                                <i class="fas fa-arrow-right" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="form-right"></div>
        </div>
    );
};


const DesignConfirm = ({ prevStep, nextStep, handleSubmit, userInput }) => {

    return (
        <div className="form-container">
            <div className="form-left">
                <img className="logo" src={DarkLogo} alt="logo"/>
                <div className="left-form-container">
                    <div className="text-header card-preview">
                        <h1>Design Preview</h1>
                    </div>

                    <div className="form-card"> 
                        <Card content={userInput} saveButton={false}/> 
                    </div>

                    <div className="button-group">
                        <button onClick={prevStep} type="button"><i class="fas fa-arrow-left"/>Back</button>
                        <button onClick={handleSubmit}>Submit<i class="fas fa-upload"/></button>
                    </div>
                </div>
            </div>
            <div className="form-right"></div>
        </div>
    );
};


const DesignSuccess = ({prevStep, closebtn}) => {
    
    return (
        <div className="form-container">
            <div className="form-left">
                <div className="left-form-container success-page">
                    <div><i class="fas fa-check-circle fa-5x"/></div>
                    <h1>Success!</h1> 
                    <p>Thanks for sharing your design with the world! You have earned a contributor badge, 
                        and your design should appear in your profile within seconds.</p>
                    <div className="button-group">
                        <button></button>
                        <button onClick={closebtn}>Done!</button>
                    </div>
                </div>
            </div>

            <div className="form-right"></div>
        </div>
    )
}


export {DesignCategory, DesignDetails, DesignUpload, DesignConfirm, DesignSuccess};