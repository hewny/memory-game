import './App.css';
import { useState } from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
