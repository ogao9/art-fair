import Card from './Card'
import TestCard  from './TestCard'

const Cards = ({info, deletebtn, togglebtn}) => {
    return (
        <div>
            {info.map((obj) => <TestCard key={obj.id} content={obj} deletebtn={deletebtn} togglebtn={togglebtn}/>)}
        </div>
    )
}

export default Cards

//Note: info.map() returns a list