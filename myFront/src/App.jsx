import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";
export default function App() {
  return (<BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/Signin" element ={<Signin/>} />
    <Route path="/Profile" element ={<Profile/>} />
    <Route path="/SignOut" element ={<SignOut/>} />
    <Route path="/SignUp" element ={<SignUp/>} />
    <Route path="/About" element ={<About/>} />
    

  </Routes>
  </BrowserRouter>)
}
