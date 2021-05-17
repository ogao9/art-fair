import PropTypes from "prop-types";

function hello(
  option1,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7
) {
  return "name"+"hello";
}
const Button = ({ onClick, likeCount }) => {
  return (
    <div>
      <h1 className="TESThEADER1">hELLO</h1>
      <button onClick={onClick} className="likeButton">
        {" "}
        Likes: {likeCount}
      </button>
      <button>Hello</button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
