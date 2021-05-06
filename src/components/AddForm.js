import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const AddForm = ({onAdd}) => {
    //we want to pass information from this form back to App.js to be added to artInfo array
    const[title, setTitle] = useState('');
    const[creator, setCreator] = useState('');
    const[starred, setStarred] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault(); //prevents page reload

        if(!title){         //some text validation
            alert('Please add a task');
            return;
        }

        onAdd({title,creator,starred}); //calls onAdd, passing in an object with title, creator, legacy info
        setTitle('');                  //reset values
        setCreator('');
        setStarred(false);
    }

    //---Material UI Styles ---
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    const classes = useStyles();


    return (
    <div className="AddForm">
        <h3>Add an art stall</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <div><TextField id="standard-basic" label="Title of Work" value={title} onChange={(e) => setTitle(e.target.value)}/></div>
            <div><TextField id="standard-basic" label="Creator Name" value={creator} onChange={(e) => setCreator(e.target.value)}/></div>
            
            <FormControlLabel control={<Checkbox icon={<StarBorder/>} checkedIcon={<Star/>} name="Feature" />}
                label="Feature" onChange={()=>setStarred(!starred)}/>
           
            <div><Button variant="contained" color="primary" onClick={onSubmit}>Add Card</Button></div>
        </form>
    </div>

    )
}



export default AddForm

/*
        <form onSubmit={onSubmit} className="AddForm"> 
            <p><b>Add a New Art Stall</b></p>
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
*/