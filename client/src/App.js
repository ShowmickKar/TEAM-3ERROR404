import React from "react";
import PositionalData from "./components/PositionalData";
import data from "./data/spaceObjects";

const App = () => {
  let debris = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i]["OBJECT_TYPE"] === "DEBRIS") {
      console.log("Debris Found");
      debris.push(data[i]);
    }
  }
  const json = JSON.stringify(debris);
  console.log(json);

  return (
    <div className='App'>
      <header>
        <h1>Mapping Space Trash in Real Time</h1>
      </header>
      <div className='container'>
        <PositionalData></PositionalData>
      </div>
    </div>
  );
};

export default App;
