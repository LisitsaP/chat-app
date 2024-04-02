import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Footer from "./components/footer/Footer";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <div>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
