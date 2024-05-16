import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

export default function StarRating(props: { numberOfStar: number }) {
  const [clickIndex, setClickIndex] = useState(0);
  const [overIndex, setOverIndex] = useState(0);

  function starClick(index: number) {
    setClickIndex(index);
    console.log(`starClick: ${index}`);
  }

  function starMouseOver(index: number) {
    setOverIndex(index);
    console.log(`starMouseOver: ${index}`);
  }

  function starMouseLeave() {
    setOverIndex(0);
    console.log(`starMouseLeave`);
  }

  return (
    <div className="star-rating">
      {[...Array(props.numberOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            onClick={() => starClick(index)}
            onMouseOver={() => starMouseOver(index)}
            onMouseLeave={starMouseLeave}
            fontSize="3em"
            className={
              index <= (overIndex || clickIndex) ? "selected" : "notSelected"
            }
          />
        );
      })}
    </div>
  );
}
