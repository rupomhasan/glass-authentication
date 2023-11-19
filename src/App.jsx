import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <Outlet></Outlet>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
