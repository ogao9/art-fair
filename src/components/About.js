import React from 'react'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'

const About = () => {
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
                <h3>How does it work?</h3>
                <p>Visitors to the fair rate your work (maybe look at stars system): Top works appear on page 1 and so on: Pagination!</p>
                <h5>How do I make money?</h5>
                <p>Link your social media or personal website </p>
            </section>
        </Container>
    )
}

export default About
