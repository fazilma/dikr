import Navbar from "./NavBar/Navbar";
import "./style.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
