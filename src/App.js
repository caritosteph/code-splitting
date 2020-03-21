import React from "react";
import "./styles.css";
import "./app.css";
import HOC from "./HOC";
import Loadable from "./Loadable";

const App = () => {
  return (
    <>
      <HOC />
      <hr />
      <Loadable />
    </>
  );
};

export default App;
