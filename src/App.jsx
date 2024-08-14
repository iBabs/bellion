import "./App.css";
import { Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
// import LogIn from "./pages/LogIn";
// import SideMenu from './components/SideMenu'
import RootLayout from "./components/RootLayout";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<h1>Home page</h1>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
