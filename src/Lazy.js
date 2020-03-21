import React, { useState, Suspense } from "react";
import "./styles.css";
import "./app.css";
import Page1 from "./Components/Page1";

const Lazy = () => {
  const [route, setRoute] = useState("page1");

  const onRouteChange = route => {
    setRoute(route);
  };

  const AsyncPage = page => React.lazy(() => import(`./Components/${page}`));

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} type={"Lazy"} />;
    } else if (route === "page2") {
      const AsyncPage2 = AsyncPage(route);
      return <AsyncPage2 onRouteChange={onRouteChange} type={"Lazy"} />;
    } else {
      const AsyncPage3 = AsyncPage(route);
      return <AsyncPage3 onRouteChange={onRouteChange} type={"Lazy"} />;
    }
  };

  return <Suspense fallback={<div>Loading...</div>}>{page()}</Suspense>;
};

export default Lazy;
