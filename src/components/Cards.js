import { useState } from "react";
import Images from "../img/index";

const Cards = (props) => {
  const { score, setScore, highscore, setHighscore } = props;
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
  const [moveList, setMoveList] = useState([]);

  const shuffleList = () => {
    let newList = [...cardList];
    let currentIndex = newList.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newList[currentIndex], newList[randomIndex]] = [
        newList[randomIndex],
        newList[currentIndex],
      ];
    }

    setCardList(newList);
  };

  const handleClick = (index) => {
    if (moveList.includes(cardList[index])) {
      if (score > highscore) {
        setHighscore(score)
      }
      setScore(0);
      setMoveList([])
      shuffleList();
    } else {
      setScore(score + 1);
      setMoveList([...moveList, cardList[index]]);
      shuffleList();
    }
  };

  return (
    <div className="card-container">
      {cardList.map((card, index) => (
        <div
          className="card"
          key={index}
          onClick={(e) => {
            handleClick(index);
          }}
        >
          <div className="card-image">
            <img className="card-image" src={Images[card]} alt={card}></img>
          </div>
          <div className="card-text">{card}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
