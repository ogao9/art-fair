import React from 'react';
import {useSpring, animated} from 'react-spring'
import {Link} from'react-router-dom'


import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Balloon from '../images/balloons.jpg'
import Jazz from '../images/Jazz.mp3'


const HomePage = () => {
    const [show, setShow] = React.useState(false);
    const audio = React.useRef(null);

    const playAudio = () => {
        audio.current.play();
    }

    //Customizing MUI Button using makeStyles() 
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

    const props = useSpring({to: {opacity: 1}, from: {opacity:0},delay: 1000, config:{duration:1000}})
    const coverProps = useSpring({to:{backgroundColor: "white"}, from: {backgroundColor: "black"}, delay: 1000, config:{duration:1000} })

    return (
        <Container maxWidth="lg">
            <section className="Introduction">
                <animated.div style={props}>
                <h1>Welcome to Art Fair 3.0!</h1>
                <p>Creators from all over the world descend on one React application to display their work</p>
                </animated.div>
            </section>

            <div className="flex-container Home">
                <div className="HomeItem 1"><Paper elevation={3} style={{height:400}}/></div>
                <div className="HomeItem 2">

                    <animated.div className="card-cover" style={show ? coverProps : null}>
                    <article class="card">
                        <h2>A short heading</h2>
                        <img src={Balloon} alt="Hot air balloons"/>
                        <div class="content">
                            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
                        </div>
                    </article>
                    </animated.div>

                </div>
                <div className="HomeItem 3">
                    <button onClick={playAudio}>Play Audio</button>
                    <audio src={Jazz} ref={audio}></audio>
                </div>
                <div className="HomeItem 4">
                    <button onClick={()=>setShow(!show)}>Click Me</button>
                </div>
            </div>
            
            <div style={{textAlign:'center'}}>
               <Link to='/ArtCentral'><Button className={classes.root}>To Gallery</Button></Link>
            </div>
        </Container>
    )
}


export default HomePage




/*

    //Note: Typography variant = actual size of text (h1-h6, p)
    //      Typography component = good for styling: your text will be wrapped in a div tag if component="div"
    //      <Typography variant="h3" component="div">Welcome to Art Fair 3.0!</Typography>

    //Responsive web design: have sizes dynamically change based on viewport we are on (xs, sm, md, lg)

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
*/