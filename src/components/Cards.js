import Card  from './Card'
import Grid from '@material-ui/core/Grid'

const Cards = ({info, deletebtn, togglebtn, authenticate, likebtn}) => {
    return (
        <Grid container spacing={2} justify="flex-start">
            {info.map( (obj) => 
                <Grid item>
                <Card key={obj.id} 
                    content={obj} deletebtn={deletebtn} togglebtn={togglebtn} authenticate={authenticate} likebtn={likebtn}/>
                </Grid>
            )}
        </Grid>
    )
}

export default Cards


//Note: info.map() applies a function to every item in the array and then returns it as a list