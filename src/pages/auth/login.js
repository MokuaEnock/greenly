import "./auth.css";
import { useState, useEffect } from "react";

export default function Login() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);

  function handleSubmit() {}

  return (
    <main className="auth" onSubmit={handleSubmit}>
      <form id="login">
        <span>Login</span>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <button className="form-button-submit" type="submit">
          Continue
        </button>
      </form>
    </main>
  );
}
