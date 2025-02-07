import React, { useState, useEffect } from "react";

export const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFunc();
        setState(data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    })();
  }, [getDataFunc]);

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
