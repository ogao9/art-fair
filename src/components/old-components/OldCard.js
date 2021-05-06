import Button from './Button'
import {useState} from 'react'
import { FaTimes } from 'react-icons/fa'

const Card = ({content, deletebtn, togglebtn}) => {
    const [likeCount, setlikeCount] = useState(0);
    const buttonClick = () =>{
        setlikeCount(likeCount + 1);
    }

    return (
        <div className={`card ${content.legacy ? 'legacy' : ''}`} onDoubleClick={() => togglebtn(content.id)}> 
            <h3>Card-title: {content.title} </h3>
            <h3>Creator: {content.creator}</h3>
            <Button onClick={buttonClick} likeCount={likeCount}/>
            <FaTimes onClick={() => deletebtn(content.id)} className="deletebtn"/>
        </div>
    )
}


Card.defaultProps = {
    title: "untitled"
}

export default Card
