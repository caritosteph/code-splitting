import React, { useState } from "react";
import "./styles.css";
import "./app.css";
import Page1 from "./Components/Page1";
import AsyncComponent from "./AsyncComponent";

const App = () => {
  const [route, setRoute] = useState("page1");

  const onRouteChange = route => {
    setRoute(route);
  };

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} />;
    } else if (route === "page2") {
      const AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
      return <AsyncPage2 onRouteChange={onRouteChange} />;
    } else {
      const AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
      return <AsyncPage3 onRouteChange={onRouteChange} />;
    }
  };

  return page();
};

export default App;
