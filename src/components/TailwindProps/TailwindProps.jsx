import Card from "./Card";
import "./TailwindProps.css";

function TailwindProps() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">TailwindProps</h1>
      <Card userName="Bruno" />
      <Card post="Staff eng." />
      <Card />
    </>
  );
}

export default TailwindProps;
