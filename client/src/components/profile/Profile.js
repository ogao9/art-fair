import React from 'react'
import {Link} from 'react-router-dom'
import './Profile.css'

const Profile = () => {
    return (
        <div className="flex-container">
            <div className="grid-container">
                <div className="box1">
                    <h4>Your Name</h4>
                    <p>Personal Info</p>
                    <Link to='/Form' className="RouterLink">Go to Form</Link>
                </div>
                <div className="itema">Item A</div>
                <div className="itemb">Item B</div>
            </div>
        </div>
    )
}

export default Profile


const styles = {

}

/*
       <Grid container  justify='space-between'>
            <Grid container item xs={4} direction="column" spacing={2}> 
                <Grid item xs={12}> 
                        <Paper elevation={3} style={{height:400}}>Item</Paper>
                    </Grid>
                    <Grid item xs={12}> 
                        <Paper elevation={3} style={{height:200}}>Item</Paper>
                    </Grid>
                    <Grid item xs={12}> 
                        <Paper elevation={3} style={{height:200}}>Item</Paper>
                </Grid>
            </Grid>
            <Grid container item xs={8} direction="column" spacing={2}> 
                <Grid item xs={12}> 
                    <Paper elevation={3} style={{height:200}}>Item</Paper>
                </Grid>
                <Grid item xs={12}> 
                    <Paper elevation={3} style={{height:200}}>Item</Paper>
                </Grid>
                <Grid item xs={12}> 
                    <Paper elevation={3} style={{height:200}}>Item</Paper>
                </Grid>
            </Grid>
        </Grid>
*/