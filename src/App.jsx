/* import "./App.css"; */
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      {/* pass components as children */}
      <LeftHandComponent name="Jayron" />
      <RightHandComponent message="This is a message" />
    </SplitScreen>
  );
}

export default App;
