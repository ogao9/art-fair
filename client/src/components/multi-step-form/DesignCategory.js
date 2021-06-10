import React from 'react'

const DesignCategory = ({nextStep}) => {
    return (
        <div>
            <h1>Pick Your Category</h1>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}

export default DesignCategory
