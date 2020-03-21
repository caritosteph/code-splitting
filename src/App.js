import React from "react";
import "./styles.css";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

export default function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}
