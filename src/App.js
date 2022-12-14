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
import Redirect from "./pages/redirect/redirect";
import Buyer from "./pages/buyers/buyer";

function App() {
  let [user, setUser] = useState(null);
  let [log, setLog] = useState(false);

  useEffect(() => {
    fetch("https://okoa-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/about" element={<About />} />
        <Route path="/redirect" element={<Redirect />} />

        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}

        <Route path="/process" element={<Process />} />

        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route
          path="/auth"
          element={<Auth log={log} setLog={setLog} onLogin={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} onLogin={setUser} />}
        />
        {/* <Route path="/collector" element={<Collector />} /> */}
        <Route path="/collector" element={<Buyer />} />
        <Route
          path="/disposer"
          element={<Disposer user={user} setUser={setUser} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
