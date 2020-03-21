import React from "react";
import { useEffect, useState } from "react";

const asyncComponent = importComponent => {
  const AsyncComponent = props => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      const loadComponent = async () => {
        const component = await importComponent();
        setComponent(component);
      };

      loadComponent();
    }, []);

    const Component = component ? component.default : null;

    return component ? <Component {...props} /> : null;
  };

  return AsyncComponent;
};

export default asyncComponent;
