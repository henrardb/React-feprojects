import React from "react";
import "./app.css";
//import Accordion from "./components/Accordion/Accordion";
//import RandomColor from "./components/Random Color/RandomColor";
// import StarRating from "./components/StarRating/StarRating";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
import Hcounter from "./components/Hcounter/Hcounter";

function App() {
  return (
    <div className="app">
      {/*<Accordion />*/}
      {/*<RandomColor />*/}
      {/* <StarRating numberOfStar={10} /> */}
      {/* <ImageSlider
        siteUrl={"https://picsum.photos/v2/list?page="}
        page={2}
        limit={10}
      /> */}
      <Hcounter />
    </div>
  );
}

export default App;
