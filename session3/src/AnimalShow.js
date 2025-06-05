import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow: cow,
  dog,
  gator,
  horse: horse,
};

function AnimalShow({ type }) {
  const [clickCount, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clickCount + 1);
  };

  console.log(clickCount);
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]}></img>
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{
          width: 10 + clickCount * 10 + "px",
        }}
      ></img>
    </div>
  );
}

export default AnimalShow;
