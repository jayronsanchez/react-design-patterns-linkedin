import { useState, useEffect } from "react";
import axios from "axios";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  const WrappedComponent = (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/${resourcePath}`);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData((prevData) => ({ ...prevData, ...changes }));
    };

    const onSave = async () => {
      const response = await axios.post(`/api/${resourcePath}`, {
        [resourceName]: data,
      });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
  return WrappedComponent;
};

export default withEditableResource;
