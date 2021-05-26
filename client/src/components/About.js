import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import Container from '@material-ui/core/Container'
import {useSpring, animated} from 'react-spring'
import {useTransition} from 'react-spring'
import Button from '@material-ui/core/Button'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'
import {green} from '@material-ui/core/colors'


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

const About = () => {
    const flyprops = useSpring({
        from: {marginTop: -1000},
        to: {marginTop: 0},
        delay: 500,
        config: {duration: 2000},
    })

    const [show, setShow] = useState(false)


    function Fade() {

        //right now, fade out does not work
        const transitions = useTransition(show, {
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          reverse: show,
          config: {duration: 1000},
          delay: 200,
        })
    
        return transitions(
          (styles, item) => item && 
            <animated.div style={styles}>
                <h1>Hello!</h1>
            </animated.div>
        )
      }

    //animating innerText
    //the .to function "maps our value to another value"
    function Number() {
        const [flip, set] = useState(false)
        const { number } = useSpring({
          reset: true,
          reverse: flip,
          from: { number: 0 },
          number: 1,
          delay: 200,
          config:{duration: 1000},
          onRest: () => set(!flip),
        })
      
        return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
    }

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <section className="AboutPage">
                <h3>Our Story</h3>
                <p>Here at Art Fair 3.0, we believe everything is art. From beautiful paintings and glass sculptures to , we believe 
                    everything is an art form.
                    Whether you're looking for the next piece of art to hang in your home or just wanting to enjoy our unique selection of art,
                    Art Fair 3.0 welcomes you!
                </p>
                <h3>Our Mission</h3>
                <p>Because we believe everything is art, we've put the power of presenting your art on this website into your hands. 
                    Simply create an account, login, and post your art!
                </p>
            </section>

            
            <section className="AboutPage">
                <h3>Our Vision</h3>
                <p>How do we envision this site being used?</p>
                <h3>Humane Technology Statement</h3>
                <p>As humans, we love tools that make our lives easier. Think about... However, in this digital age, social media
                    is no longer a tool. A tool sits there just waiting to be used. Social media pokes and prods, manipulating you
                    every minute you use it. Art Fair 3.0 seeks to be the start of a new form of social media,
                    a more humane social media. 
                </p>
            </section>
            
        </Container>
        </ThemeProvider>
    )
}

export default About


/*
<animated.div style={flyprops}>
                <h3>How does it work?</h3>
                <Button onClick={()=>setShow(!show)}>Click to Show</Button>
</animated.div>
<Number/>
<Fade/>
*/