/*
Used sample data from this repository: https://github.com/WorldWindLabs/SpaceBirds
*/

import React from "react";
import PositionalData from "./components/PositionalData";

const App = () => {
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
