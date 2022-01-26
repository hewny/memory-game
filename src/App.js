import './App.css';
import { useState } from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"

const App = () => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="App">
      <Header score={score} highscore={highscore} />
      <Cards score={score} setScore={setScore} highscore={highscore} setHighscore={setHighscore}/>
    </div>
  );
}

export default App;
