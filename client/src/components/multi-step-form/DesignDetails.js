import React, { useState } from "react";

const DesignDetails = ({ nextStep, prevStep, userInput, handleChange }) => {
    const [titleError, setTitleError] = useState(false);
    const [descrError, setDescrError] = useState(false);

    //Check For Empty Fields
    // const onNext = () => {
    //     setTitleError(!values.title);
    //     setCreatorError(!values.creator);
    //     setDescrError(!values.description);

    //     if (values.title && values.creator && values.description) nextStep();
    // };

    return (
        <form>
            <label for="title">
                Arrow Logo: Give your design a title <br />
                (creativity is encouraged)
            </label>
            <input
                id="title"
                type="text"
                placeholder="Enter Title Here"
                value={userInput.title}
                onChange={(e) => handleChange("title", e)}
                required
                maxLength="20"
            ></input>

            <label for="description">
                Arrow Logo: Give a brief description of your design
                <br />
                What's the motivation behind it and how should other people interpret it?
            </label>
            <input
                id="description"
                type="text"
                placeholder="Enter a Description"
                value={userInput.description}
                onChange={(e) => handleChange("description", e)}
            ></input>

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </form>
    );
};

export default DesignDetails;
