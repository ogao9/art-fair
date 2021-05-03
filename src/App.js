import { useState } from 'react' 
import Header from './components/Header'
import Cards from './components/Cards'
import AddForm from './components/AddForm'
import Login from './components/Login'


function App() {

  //global state variable
  const[artInfo, setartInfo] = useState([
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

  //--- Button Functions ---
  const deletebtn = (id) => {
    console.log("delete", id);
    setartInfo(artInfo.filter((obj) => obj.id !== id));
  }

  const addbtn = (new_card_info) => {
    console.log("add called");
    const id = Math.random() * 1000;
    const newCard = {id, ...new_card_info};
    setartInfo([...artInfo, newCard]);
  }

  const togglebtn = (id) => {
    console.log("toggle called");
    setartInfo(artInfo.map( (card) => card.id === id ? {...card, legacy: !card.legacy} : card  ));
  }


  return (
    <div className="container">
      <Header/>
      <Login/>
      {
        artInfo.length ?
        <Cards info={artInfo} deletebtn={deletebtn} togglebtn={togglebtn}/> 
        : "No more Cards"
      }
      <AddForm onAdd={addbtn}/>
    </div>
  );
}

export default App;


//Ideas:
//have a login component
//if people have credentials, then they can delete or add cards
//add a favoriting option for each card: this is like the double click task

