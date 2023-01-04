import React from 'react'
import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Profile from "./components/Profile";


const App = () =>{
  return (
    <>
    <Navbar />
    
    <Routes>  
    <Route path="/" element={<Home  />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<error/>}/>
</Routes>
    
    </>
    
  )
}

export default App