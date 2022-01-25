import { useState } from "react";
import Images from "../img/index"

const Cards = () => {
  const [cardList, setCardList] = useState([
    "beer",
    "burger",
    "chicken",
    "chocolate",
    "coffee",
    "cookie",
    "hotdog",
    "icecream",
    "pizza",
    "popcorn",
    "pretzel",
    "sushi",
  ]);

  return (
    <div className="card-container">
      {cardList.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={Images[card]} alt={card}></img>
          </div>
          <div className="card-text">{card}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
