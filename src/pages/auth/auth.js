import "./auth.css";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import Disposer from "../disposer/Disposer";

export default function Auth({ setLog, log }) {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        // res.json().then((user) => onLogin(user));
        console.log("success");
        setLog(true);
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <main className="auth">
      <form id="login" onSubmit={handleSubmit}>
        <span>Get Started</span>
        <input
          type="text"
          placeholder="Enter username"
          autoComplete="on"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          required
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          autoComplete="on"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          required
          autoComplete="on"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="form-button-submit" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </main>
  );
}
