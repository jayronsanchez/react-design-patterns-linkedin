import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return <UserInfoForm />;
}

export default App;
