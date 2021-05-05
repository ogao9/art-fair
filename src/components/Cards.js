import OldCard from './OldCard'
import Card  from './Card'

const Cards = ({info, deletebtn, togglebtn, authenticate}) => {
    return (
        <div>
            {info.map((obj) => 
                <Card key={obj.id} content={obj} deletebtn={deletebtn} togglebtn={togglebtn} authenticate={authenticate}/>)}
        </div>
    )
}

export default Cards

//Note: info.map() applies a function to every item in the array and then returns it as a list