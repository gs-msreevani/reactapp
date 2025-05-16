import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Logout from "./components/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.aptrinsic?.("reset");
  };

  return (
    <Router basename="/reactapp">
      <div>
        {isLoggedIn && (
          <nav>
            <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            <Link to="/logout">Logout</Link>
          </nav>
        )}

        <Routes>
          <Route
            path="/login"
            element={<LoginForm onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
          />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
