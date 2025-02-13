import { useState, useEffect } from "react";
import axios from "axios";

const withEditableUser = (Component, userId) => {
  const WrappedComponent = (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);
    const onChangeUser = (changes) => {
      setUser((prevUser) => ({ ...prevUser, ...changes }));
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/api/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
  return WrappedComponent;
};

export default withEditableUser;
