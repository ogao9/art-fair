import React from 'react'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


const Profile = () => {
    return (
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
    )
}

export default Profile
