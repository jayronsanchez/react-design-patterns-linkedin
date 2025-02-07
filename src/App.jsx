import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => {
  return <h1>{message}</h1>;
};

function App() {
  /*   return (
    <>
      <ResourceLoader resourceUrl={"/users/123"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/products/1234"} resourceName={"product"}>
        <ProductInfo />
      </ResourceLoader>
    </>
  ); */

  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
