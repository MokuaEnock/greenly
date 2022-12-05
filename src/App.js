import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/navbar";
import Landing from "./pages/landing/landing";
import Footer from "./pages/footer";
import About from "./pages/about/about";
// import Services from "./pages/services/services";
// import Events from "./pages/events/events";
import Process from "./pages/process/process";
// import Contact from "./pages/contact/contact";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import Collector from "./pages/collector/Collector";
import Disposer from "./pages/disposer/Disposer";
import { useState } from "react";

function App() {
  let [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/process" element={<Process />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/collector" element={<Collector />} />
        <Route path="/disposer" element={<Disposer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
