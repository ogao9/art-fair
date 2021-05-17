import React from 'react'
import {useState, useEffect} from 'react'
import Card  from './Card'
import PaginationComponent from'./Pagination'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'


const ArtCentral = () => {
    const [artInfo, setArtInfo] = useState([]);

    //MODIFIES: artInfo
    //EFFECTS: fetches data from database every time this page renders
    //         We created a function inside the function because WE can't pass an async function directly into useEffect()
    useEffect(()=>{
        const setData = async() =>{
        const artdata = await getAllCards();
        setArtInfo(artdata);
        }
        setData();
    },[])   //useEffect only happens if something in this array changes


    //EFFECTS: performs a GET request to our database
    //         fetch() returns a promise object and .json() convertS that promise to json data
    const getAllCards = async () => {
        const response = await fetch('http://localhost:5000/workS'); 
        const data = await response.json(); 
        return data; 
    }

    const getSingleCard = async (id) => {
        const response = await fetch(`http://localhost:5000/works/${id}`); 
        const data = await response.json(); 
        return data; 
    }


    //MODIFIES: artInfo, db
    //EFFECTS: Deletes the specified card from database
    //         This function is called from Card.js w/ the card's id passed in
    const deletebtn = async(id) => {
        const fetchDetails = {
        method: "DELETE",
        }
        const response = await fetch(`http://localhost:5000/works/${id}`,fetchDetails);
        
        setArtInfo(artInfo.filter((obj) => obj.id !== id));
    }


    //MODIFIES: artInfo, db
    //EFFECTS: Changes the specified card's boolean attribute: starred
    //         This function is called from Card.js w/ the card's id passed in
    const togglebtn = async (id) => {
        const cardToToggle = await getSingleCard(id);
        const updatedCard = {...cardToToggle, starred: !cardToToggle.starred};

        const fetchDetails = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCard),      // body data type must match "Content-Type" header
        }
        const response = await fetch(`http://localhost:5000/works/${id}`,fetchDetails);
        const data = await response.json();

        setArtInfo(artInfo.map( (card) => card.id === id ? {...card, starred: data.starred} : card) );
    }


    //MODIFIES: artInfo, db
    //EFFECTS: Changes the specified card's "likes" value
    const likebtn = async (id) => {
        const card = await getSingleCard(id);
        const updatedCard = {...card, likes: card.likes+1};

        const fetchDetails = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCard),
        }
        const response = await fetch(`http://localhost:5000/works/${id}`,fetchDetails);
        const data = await response.json();

        setArtInfo(artInfo.map((card) => card.id === id ? {...card, likes:data.likes} : card));
    }


    //with pagination, we are basically manipulating artInfo
    //arrays are zero-indexed
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const endIndex = cardsPerPage * currentPage;
    const startIndex = endIndex - cardsPerPage;
    const cardsToShow = artInfo.slice(startIndex, endIndex);


    return (
        <Container maxWidth="lg">
            <header className="ArtGalleryWelcome">
                <h2>Welcome to the Art Gallery!</h2>
            </header>

         

        <Grid container spacing={3} justify="space-between">
        {
            cardsToShow.length
            ? cardsToShow.map( (cardInfo) => 
                        <Grid item xs={4}>
                        <Card key={cardInfo.id} 
                            content={cardInfo} deletebtn={deletebtn} togglebtn={togglebtn} authenticate={true} likebtn={likebtn}/>
                        </Grid>)
            : "None Available"
        }
        </Grid>

        <PaginationComponent paginate={paginate} totalCards={artInfo.length} cardsPerPage={cardsPerPage}/>

        </Container>
    )
}

export default ArtCentral




/* Notes:
1. artInfo.map() applies a function to every item in the array and then returns it 
2.
3.
*/





/* artInfo Before we connected the json server

const[artInfo, setArtInfo] = useState([
  {
    id: 1,
    title: "Jumping Oranges",
    creator: "Peter Banaya",
    legacy: false,
  },
  {
    id: 2,
    title: "Peaceful Sunset",
    creator: "Ben Park",
    legacy: false,
  }
]) 

//addbtn ID no longer needed
    console.log("add called");
    const id = Math.random() * 1000;
    const newCard = {id, ...new_card_info};
setArtInfo([...artInfo, newCard]);
*/