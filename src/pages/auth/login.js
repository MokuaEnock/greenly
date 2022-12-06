import "./auth.css";
import { useState, useEffect } from "react";

export default function Login({ setCurrentUser }) {
  let [username, setUsername] = useState("");
  // let [email, setEmail] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        r.json().then((user) => console.log("success", user));
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
