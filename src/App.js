import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/navbar";
import Landing from "./pages/landing/landing";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
