import React from "react";
import {useEffect} from 'react'
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import "./Profile.css";
import cardServices from '../../services/cardServices'
import Card from '../art-central/Card'

const Profile = ({loginInfo}) => {
    const [cardsToShow, setCards] = React.useState([]);

    useEffect(()=>{
        const loadCards = async()=>{
            //iterate through users cards array and add each card to cardsToShow
            for(let i=0; i<loginInfo.cards.length;i++){
                let card = await cardServices.getOne(loginInfo.cards[i]);
                console.log('getOne:', card)
    
                //card is an object, not an array of objects
                setCards([...cardsToShow, card])
                console.log('cardsToShow', cardsToShow)
            }  
        }
        console.log("Loading Cards...")
        loadCards();
    },[])


    return (
        <div>
            <Header />
            <div className="flex-container">
                <div className="left">
                    <h2>{loginInfo ? "Username Goes Here" : "Not Logged In"}</h2>
                </div>
                <div className="right">
                    <h2>User's Cards</h2>
                    <div className="card-container">
                    {cardsToShow
                        ? cardsToShow.map(cardInfo => (
                            <Card
                                key={cardInfo._id}
                                content={cardInfo}
                                impactbtn={null}
                                deletebtn={null}
                            />
                        ))
                        : "No Cards Available"}
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;

const styles = {};

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




        <div className="grid-container">
                    <div className="box1">
                        <h4>Your Name</h4>
                        <p>Personal Info</p>
                        <Link to='/Form' className="RouterLink">Go to Form</Link>
                    </div>
                    <div className="itema">Item A</div>
                    <div className="itemb">Item B</div>
                </div>
*/
