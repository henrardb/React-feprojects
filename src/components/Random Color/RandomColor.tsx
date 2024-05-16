import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#FFFFFF");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function generateHex() {
    console.log("ChooseHex");
    let hexCode: string = "#";
    let randomNumber: number;
    const hexArray: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    for (let i = 1; i < 7; i++) {
      randomNumber = Math.floor(Math.random() * hexArray.length);
      hexCode += hexArray[randomNumber];
      console.log(randomNumber);
    }
    return hexCode;
  }

  function generateRgb() {
    //rgb(54,200,1)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCode = `rgb(${r},${g},${b})`;
    console.log(rgbCode);
    return rgbCode;
  }

  function generateColor() {
    let colorCode: string = "";
    if (typeOfColor === "hex") {
      setColor(generateHex());
    } else {
      setColor(generateRgb());
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <input
          type="button"
          value="Choose Hex color"
          onClick={() => setTypeOfColor("hex")}
        ></input>
        <input
          type="button"
          value="Choose RGB color"
          onClick={() => setTypeOfColor("rgb")}
        ></input>
        <input
          type="button"
          value="Generate color"
          onClick={generateColor}
        ></input>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
