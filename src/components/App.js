import React, { useState, useEffect } from "react";
import WorldMap from "./WorldMap";

function App() {
  // TODO: encapsulate
  const [visitedPlaces, setVisitedPlaces] = useState(["UA"]);
  const triggerPlace = code => {
    if (visitedPlaces.includes(code)) {
      setVisitedPlaces([...visitedPlaces.filter(place => place !== code)]);
    } else setVisitedPlaces([...visitedPlaces, code]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Scratch Map</h1>
      </header>
      <main>
        <div>
          <WorldMap visitedPlaces={visitedPlaces} triggerPlace={triggerPlace} />
        </div>
      </main>
    </div>
  );
}

export default App;
