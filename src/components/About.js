import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import Container from '@material-ui/core/Container'
import {useSpring, animated} from 'react-spring'
import {useTransition} from 'react-spring'
import Button from '@material-ui/core/Button'

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
        <Container maxWidth="lg">
            <section className="AboutPage">
                <h3>What makes Art Fair 3.0 special?</h3>
                <p>Here at Art Fair 3.0, we believe everyone has a unique taste for art. 
                    Whether you're looking for the next piece of art to hang in your home or just wanting to enjoy our unique selection of art,
                    Art Fair 3.0 welcomes you!
                </p>
                <p>Because we believe everything is art, we've put the power of presenting your art on this website into your hands. 
                    Simply create an account, login, and post your art!
                </p>
            </section>

            
            <section className="AboutPage">
                <animated.div style={flyprops}>
                <h3>How does it work?</h3>
                <p>Visitors to the fair rate your work (maybe look at stars system): Top works appear on page 1 and so on: Pagination!</p>
                <h5>How do I make money?</h5>
                <p>Link your social media or personal website </p>
                </animated.div>
            </section>
            

            <section className="AboutPage">
                <h3>How does it work?</h3>
                <Button onClick={()=>setShow(!show)}>Click to Show</Button>
                <Number/>
                <Fade/>
            </section>
        </Container>
    )
}

export default About
