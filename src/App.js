import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/navbar";
import Landing from "./pages/landing/landing";
import Footer from "./pages/footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/services" element={<Landing />} />
        <Route path="/events" element={<Landing />} />
        <Route path="/contact" element={<Landing />} />
        <Route path="/auth" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
