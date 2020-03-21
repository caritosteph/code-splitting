import React, { useState } from "react";
import "./styles.css";
import "./app.css";
import Page1 from "./Components/Page1";
import AsyncComponent from "./AsyncComponent";

const HOC = () => {
  const [route, setRoute] = useState("Page1");

  const onRouteChange = route => {
    setRoute(route);
  };

  const AsyncPage = page =>
    AsyncComponent(() => import(`./Components/${page}`));

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} type={"HOC"} />;
    } else if (route === "page2") {
      const AsyncPage2 = AsyncPage(route);
      return <AsyncPage2 onRouteChange={onRouteChange} type={"HOC"} />;
    } else {
      const AsyncPage3 = AsyncPage(route);
      return <AsyncPage3 onRouteChange={onRouteChange} type={"HOC"} />;
    }
  };

  return page();
};

export default HOC;
