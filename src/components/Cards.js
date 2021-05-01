import Card from './Card'

const Cards = ({info, deletebtn, togglebtn}) => {
    return (
        <div>
            {info.map((obj) => <Card key={obj.id} content={obj} deletebtn={deletebtn} togglebtn={togglebtn}/>)}
        </div>
    )
}

export default Cards

//Note: info.map() returns a list