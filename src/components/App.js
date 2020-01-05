import React from "react";
import WorldMap from "./WorldMap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Scratch Map</h1>
      </header>
      <main>
        <pinch-zoom className="my-pinch-zoom">
          <WorldMap />
        </pinch-zoom>
      </main>
      <script>
        const pinchZoom = document.querySelector('.my-pinch-zoom');
      </script>
    </div>
  );
}

export default App;
