import React from "react";

const Page3 = ({ onRouteChange, type }) => (
  <div className="App">
    <h1 className="App-title">Using {type}</h1>
    <header className="App-header">
      <h1 className="App-title">Welcome to Page 3</h1>
    </header>
    <button onClick={() => onRouteChange("page1")}>Page1</button>
    <button onClick={() => onRouteChange("page2")}>Page2</button>
    <button className="disabled">Page3</button>
  </div>
);

export default Page3;
