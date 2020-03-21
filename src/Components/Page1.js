import React from "react";

const Page1 = ({ onRouteChange, type }) => (
  <div className="App">
    <h1 className="App-title">Using {type}</h1>
    <header className="App-header">
      <h1 className="App-title">Welcome to Page 1</h1>
    </header>
    <button className="disabled">Page1</button>
    <button onClick={() => onRouteChange("Page2")}>Page2</button>
    <button onClick={() => onRouteChange("Page3")}>Page3</button>
  </div>
);

export default Page1;
