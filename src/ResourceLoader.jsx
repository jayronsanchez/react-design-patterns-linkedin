import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // in Vite, set up a proxy for the /current-user endpoint in vite.config.js
        const response = await axios.get(resourceUrl);
        setState(response.data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    })();
  }, [resourceUrl]);

  return (
    <>
      {/*  for each child, if it is a valid React element, clone it and pass the user prop */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
      })}
    </>
  );
};
