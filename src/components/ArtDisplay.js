import React from 'react'
import { useState, useEffect } from 'react' 

import Cards from './Cards'
import AddForm from './AddForm'
import Login from './Login'

const ArtDisplay = () => {

//global(or at least used to be) state variables
  const [artInfo, setArtInfo] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);
  const [authenticate, setAuthenticate] = useState(false);


  //Function: loads in data upon page loading
  //          we have to create a function inside the function because you can't create an async function directly inside useEffect
  useEffect(()=>{
    const setData = async() =>{
      const artdata = await getData();
      const logindata = await getLoginData();
      setArtInfo(artdata);
      setLoginInfo(logindata)
    }
    setData();
  },[])   //useEffect only happens if something in this array changes


  //Functions: GETs data from db.json
  //          fetch returns a promise object and .json() convert that promise to json data
  const getData = async ()=>{
    const response = await fetch('http://localhost:5000/works'); 
    const data = await response.json(); 
    return data; 
  }

  const getSingleCard = async (id)=>{
    const response = await fetch(`http://localhost:5000/works/${id}`); 
    const data = await response.json(); 
    console.log(data);
    return data; 
  }

  const getLoginData = async () => {
    const response = await fetch('http://localhost:5000/credentials')
    const data = await response.json();
    return data;
  }

  //Function: Adds a card to db.json
  //          new_card_info is passed from AddForm.js, where this function is called
  const addbtn = async(new_card_info) => {
    console.log(new_card_info);
    const fetchDetails = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(new_card_info) //stringify converts an object to a JSON string (the format we want)
    }

    const response = await fetch('http://localhost:5000/works', fetchDetails);
    const data = await response.json(); //set data to the card we just created
    setArtInfo([...artInfo, data]);
  }


  //Function: Deletes a card from db.json
  //          Triggered from Card.js, the card's id attribute is passed in
  const deletebtn = async(id) => {
    const fetchDetails = {
      method: "DELETE",
    }
    const response = await fetch(`http://localhost:5000/works/${id}`,fetchDetails);
  
    setArtInfo(artInfo.filter((obj) => obj.id !== id));
  }


  //Function: Changes a card's boolean attribute "starred"
  //          Triggered from Card.js
  const togglebtn = async (id) => {
    console.log("toggle called");
    const cardToToggle = await getSingleCard(id);
    const updatedCard = {...cardToToggle, starred: !cardToToggle.starred};

    console.log(updatedCard)

    const fetchDetails = {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCard), // body data type must match "Content-Type" header
    }

    const response = await fetch(`http://localhost:5000/works/${id}`,fetchDetails);
    const data = await response.json();

    setArtInfo(artInfo.map( (card) => card.id === id ? {...card, starred: data.starred} : card  ));
  }
    return (
        <div>
        <Login info={loginInfo} setAuthenticate={setAuthenticate}/>

        {
        authenticate?
        <AddForm onAdd={addbtn}/>
        : null
        }

        {
        artInfo.length ?
        <Cards info={artInfo} deletebtn={deletebtn} togglebtn={togglebtn} authenticate={authenticate}/> 
        : "No Stalls Available"
        }
        </div>
    )
}

export default ArtDisplay





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