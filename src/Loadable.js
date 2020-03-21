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

  const AsyncPage = loadable(props => import(`./Components/${props.page}`));

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} type={"Loadable"} />;
    } else {
      return (
        <AsyncPage
          page={route}
          onRouteChange={onRouteChange}
          type={"Loadable"}
        />
      );
    }
  };

  return page();
};

export default Loadable;
