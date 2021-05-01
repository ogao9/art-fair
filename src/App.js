import { useState } from 'react' //importing a hook
import Header from './components/Header'
import Cards from './components/Cards'
import AddForm from './components/AddForm'
import TestCard from './components/TestCard'

function App() {

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
  ]) //global state

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
      {
        artInfo.length ?
        <Cards info={artInfo} deletebtn={deletebtn} togglebtn={togglebtn}/> 
        : "No more Cards"
      }
      <AddForm onAdd={addbtn}/>

      <TestCard/>
    </div>
  );
}
//

//ideas:
//have a login component
//if people have credentials, then they can delete or add cards
//add a favoriting option for each card: this is like the double click task
export default App;
