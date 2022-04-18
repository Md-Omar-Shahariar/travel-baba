import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";

function App() {
  return (
    <div className="min-vh-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
