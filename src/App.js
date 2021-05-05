import { useState, useEffect } from 'react' 
import Header from './components/Header'
import Cards from './components/Cards'
import AddForm from './components/AddForm'
import Login from './components/Login'


function App() {

  //global state variable
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

  const getLoginData = async () => {
    const response = await fetch('http://localhost:5000/credentials')
    const data = await response.json();
    return data;
  }

  //Function: Adds a card to db.json
  //          new_card_info is passed from AddForm.js, where this function is called
  const addbtn = async(new_card_info) => {
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


  //Function: TBD
  //
  const togglebtn = (id) => {
    console.log("toggle called");
    setArtInfo(artInfo.map( (card) => card.id === id ? {...card, legacy: !card.legacy} : card  ));
  }


  return (
    <div className="container">
      <Header/>
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
  );
}

export default App;





/* Before we connected the json server

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