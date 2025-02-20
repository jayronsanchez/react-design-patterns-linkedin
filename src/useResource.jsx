import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};
