import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState("");

  function handleSimpleSelection(id: string) {
    setSelected(id === selected ? "" : id);
  }

  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((info) => (
          <div key={info.id} className="accordion">
            <div
              onClick={() => handleSimpleSelection(info.id)}
              className="question"
            >
              <h3>{info.question}</h3>
              <span>+</span>
            </div>
            {selected === info.id ? <div>{info.answer}</div> : null}
          </div>
        ))
      ) : (
        <div>No data found !</div>
      )}
    </div>
  );
}
