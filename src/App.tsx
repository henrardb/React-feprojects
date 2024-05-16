import React from "react";
import "./app.css";
//import Accordion from "./components/Accordion/Accordion";
//import RandomColor from "./components/Random Color/RandomColor";
import StarRating from "./components/StarRating/StarRating";

function App() {
  return (
    <div className="app">
      {/*<Accordion />*/}
      {/*<RandomColor />*/}
      <StarRating numberOfStar={10} />
    </div>
  );
}

export default App;
