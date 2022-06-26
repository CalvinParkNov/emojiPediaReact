import React from "react";
import Detail from "./Detail";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Detail />
      </dl>
    </div>
  );
}

export default App;
