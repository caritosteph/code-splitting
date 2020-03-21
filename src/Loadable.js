import React, { useState } from "react";
import "./styles.css";
import "./app.css";
import Page1 from "./Components/Page1";
import loadable from "@loadable/component";

const Loadable = () => {
  const [route, setRoute] = useState("page1");

  const onRouteChange = route => {
    setRoute(route);
  };

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} type={"Loadable"} />;
    } else if (route === "page2") {
      const AsyncPage2 = loadable(() => import("./Components/Page2"));
      return <AsyncPage2 onRouteChange={onRouteChange} type={"Loadable"} />;
    } else {
      const AsyncPage3 = loadable(() => import("./Components/Page3"));
      return <AsyncPage3 onRouteChange={onRouteChange} type={"Loadable"} />;
    }
  };

  return page();
};

export default Loadable;
