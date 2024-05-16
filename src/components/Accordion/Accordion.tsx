import { useState } from "react";
import data from "./data";
import "./accordion.css";

export default function Accordion() {
  const [selected, setSelected] = useState("");
  const [multipleEnabled, setMultipleEnabled] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState<string[]>([]);

  function handleSimpleSelection(id: string) {
    setSelected(id === selected ? "" : id);
  }

  function handleMultipleSelection(id: string) {
    let copyMultipleSelected = [...multipleSelected];
    let indexOfSelected = copyMultipleSelected.indexOf(id);
    console.log(indexOfSelected);
    if (indexOfSelected === -1) {
      copyMultipleSelected.push(id);
    } else {
      copyMultipleSelected.splice(indexOfSelected, 1);
    }
    console.log(copyMultipleSelected);
    setMultipleSelected(copyMultipleSelected);
  }

  function enableMultipleSelection() {
    setMultipleEnabled(!multipleEnabled);
  }

  return (
    <div className="wrapper">
      <input
        onClick={enableMultipleSelection}
        type="button"
        value="MultiSelection"
      ></input>
      {data && data.length > 0 ? (
        data.map((info) => (
          <div key={info.id} className="accordion">
            <div
              onClick={
                multipleEnabled
                  ? () => handleMultipleSelection(info.id)
                  : () => handleSimpleSelection(info.id)
              }
              className="question"
            >
              <h3>{info.question}</h3>
              <span>+</span>
            </div>
            {multipleEnabled ? (
              multipleSelected.indexOf(info.id) !== -1 ? (
                <div>{info.answer}</div>
              ) : null
            ) : selected === info.id ? (
              <div>{info.answer}</div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No data found !</div>
      )}
    </div>
  );
}
