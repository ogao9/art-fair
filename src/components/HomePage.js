import React from 'react';
import {Link} from'react-router-dom'


import Button from '@material-ui/core/Button';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'
import {green} from '@material-ui/core/colors'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import {useSpring, animated} from 'react-spring'


const HomePage = () => {

    //Customizing the Button from MUI using makeStyles() 
    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
            border: 0,
            borderRadius: 20,
            padding: '5px 30px',
            color: 'white',
            margin: '10px 0',
            textAlign: 'center',
        }
    })
    const classes = useStyles();


    //Creating my custom theme: this is where "color:primary comes from"
    const theme = createMuiTheme({
        typography:{
            h2:{
                fontSize: 24,
            },
            fontFamily: [
                'Roboto',
                'sans-serif'
            ].join(',')
        },
        palette:{
            primary:{
                main: orange[500],
            },
            secondary: {
                main: green[400],
            }
        }
    })


    //Note: Typography variant = actual size of text (h1-h6, p)
    //      Typography component = good for styling: your text will be wrapped in a div tag if component="div"
    //      <Typography variant="h3" component="div">Welcome to Art Fair 3.0!</Typography>

    //Responsive web design: have sizes dynamically change based on viewport we are on (xs, sm, md, lg)

    const props = useSpring({to: {opacity: 1}, from: {opacity:0},delay: 1000, config:{duration:1000}})


    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
    
            <section className="Introduction">
                <animated.div style={props}>
                <h1>Welcome to Art Fair 3.0!</h1>
                <p>Creators from all over the world descend on one React application to display their work</p>
                </animated.div>
            </section>
            
            
            <section className="PaperGrid">
            <Grid container spacing={2} justify='space-between'>
            <Grid item xs={3}> 
                    <Paper elevation={3} style={{height:400}}/>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{height:400}}/>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{height:400}}/>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{height:400}} />
                </Grid>
            </Grid>
            </section>
           

            
            <div style={{textAlign:'center'}}>
               <Link to='/ArtDisplay'><Button className={classes.root}>To Gallery</Button></Link>
            </div>
            

        </Container>
        </ThemeProvider>
    )
}


export default HomePage


//we made an unintentional feature: it's like curtains

/*
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        MUI Theming
                    </Typography>
                    <Button>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>


            <Grid container spacing={2} justify='center'>
                <Grid item xs={3} sm={6} md ={9} lg={3}> 
                    <Paper elevation={3} style={{height:75, width:'100%', backgroundColor:'orange'}}/>
                </Grid>
                <Grid item xs={3} sm={6} md ={9} lg={3}>
                    <Paper style={{height:75, width:'100%'}}/>
                </Grid>
                <Grid item xs={3} sm={6} md ={9} lg={3}>
                    <Paper style={{height:75, width:'100%'}}/>
                </Grid>
            </Grid>

                            <Grid item> 
                    <Paper elevation={3} style={{height:400, width:275}}/>
                </Grid>
                <Grid item>
                    <Paper elevation={3} style={{height:400, width:275}}/>
                </Grid>
                <Grid item>
                    <Paper elevation={3} style={{height:400, width:275}}/>
                </Grid>
                <Grid item>
                    <Paper elevation={3} style={{height:400, width:275}}/>
                </Grid>
*/