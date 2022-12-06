import "./auth.css";
import { useState, useEffect } from "react";

export default function Auth() {
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
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          required
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
