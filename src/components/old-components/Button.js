import PropTypes from 'prop-types'


const Button = ({onClick, likeCount}) => {
    return (
        <button onClick={onClick} className="likeButton"> Likes: {likeCount}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}


export default Button
