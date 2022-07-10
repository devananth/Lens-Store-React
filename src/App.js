import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { AllRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
      <AllRoutes />
    </div>
  );
}

export default App;
