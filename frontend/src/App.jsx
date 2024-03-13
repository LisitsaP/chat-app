// import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
