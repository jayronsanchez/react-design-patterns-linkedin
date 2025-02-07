import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // in Vite, set up a proxy for the /current-user endpoint in vite.config.js
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    })();
  }, [userId]);

  return (
    <>
      {/*  for each child, if it is a valid React element, clone it and pass the user prop */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
      })}
    </>
  );
};
