import {useState} from 'react'

const AddForm = ({onAdd}) => {
    //we want to pass information from this form back to App.js to be added to artInfo array
    const[title, setTitle] = useState('');
    const[creator, setCreator] = useState('');
    const[legacy, setLegacy] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault(); //prevent submission to new page?

        if(!title){ //some text validation
            alert('Please add a task') 
            return
        }

        onAdd({title,creator,legacy}); //pass in an object with text, day, reminder info
        setTitle('');                    //reset values
        setCreator('');
        setLegacy(false);
    }

    return (
        <form onSubmit={onSubmit} style={formStyle}> 
            <div>
                <label>Title of Piece</label>
                <input type="text" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Creator</label>
                <input type="text" placeholder="Add Creator Name" value={creator} onChange={(e) => setCreator(e.target.value)}></input>
            </div>
            <div>
                <label>Legacy Member</label>
                <input type="checkbox" value={legacy} onChange={(e) => setLegacy(!legacy)}></input>
            </div>

            <input type="Submit" value="Add Card"></input>
        </form>
    )
}

const formStyle={
    padding: 20,
    backgroundColor: "lightgray",
    width: 500,
    margin: 10,
}

export default AddForm
