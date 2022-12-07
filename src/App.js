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
// import Collector from "./pages/collector/Collector";
import Disposer from "./pages/disposer/Disposer";
import { useState, useEffect } from "react";

function App() {
  let [user, setUser] = useState(null);
  let [log, setLog] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

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
        <Route path="/auth" element={<Auth log={log} setLog={setLog} />} />
        <Route
          path="/login"
          element={<Login user={user} onLogin={setUser} />}
        />
        {/* <Route path="/collector" element={<Collector />} /> */}
        <Route
          path="/disposer"
          element={<Disposer user={user} onLogin={setUser} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
