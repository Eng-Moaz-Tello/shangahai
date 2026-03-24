import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/shangahai" element={<Main />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
