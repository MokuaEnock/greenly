import "./auth.css";
import { useState, useEffect } from "react";
import Disposer from "../disposer/Disposer";
import { redirect } from "react-router-dom";

export default function Login({ onLogin }) {
  let [username, setUsername] = useState("");
  // let [email, setEmail] = useState("");
  // let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [currentuser, setCurrentUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <main className="auth" onSubmit={handleSubmit}>
      <form id="login">
        <span>Login</span>
        <input
          type="text"
          autoComplete="on"
          required
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          autoComplete="on"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button-submit" type="submit">
          {isLoading ? "Log In" : "Login"}
        </button>
      </form>
    </main>
  );
}
