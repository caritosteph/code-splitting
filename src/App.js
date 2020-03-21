import React from "react";
import "./styles.css";
import "./app.css";
import HOC from "./HOC";
import Loadable from "./Loadable";
import Lazy from "./Lazy";

const App = () => {
  return (
    <>
      <HOC />
      <hr />
      <Loadable />
      <hr />
      <Lazy />
    </>
  );
};

export default App;
