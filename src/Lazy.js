import React, { useState, Suspense } from "react";
import "./styles.css";
import "./app.css";
import Page1 from "./Components/Page1";

const Loadable = () => {
  const [route, setRoute] = useState("page1");

  const onRouteChange = route => {
    setRoute(route);
  };

  const page = () => {
    if (route === "page1") {
      return <Page1 onRouteChange={onRouteChange} type={"Lazy"} />;
    } else if (route === "page2") {
      const AsyncPage2 = React.lazy(() => import("./Components/Page2"));
      return (
        <Suspense fallback={<div>loading...</div>}>
          <AsyncPage2 onRouteChange={onRouteChange} type={"Lazy"} />;
        </Suspense>
      );
    } else {
      const AsyncPage3 = React.lazy(() => import("./Components/Page3"));
      return (
        <Suspense fallback={<div>loading...</div>}>
          <AsyncPage3 onRouteChange={onRouteChange} type={"LAzy"} />
        </Suspense>
      );
    }
  };

  return page();
};

export default Loadable;
