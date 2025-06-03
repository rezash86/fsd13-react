import "./StudentCard.css";
import style from "../../App.module.css";

function StudentCard(props) {
  const cardStyle = {
    color: "red",
    fontSize: "20px",
    texAlign: "center",
  };

  return (
    <div>
      <p className="title">Name : {props.name}</p>
      <p style={cardStyle}>Age : {props.age}</p>
      <p className={style.highlight}>grade : 90</p>
    </div>
  );
}

export default StudentCard;
