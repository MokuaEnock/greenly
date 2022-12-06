import "./auth.css";
import { useState, useEffect } from "react";

export default function Auth() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <main className="auth">
      <form id="login">
        <span>Get Started</span>
        <input type="text" placeholder="Enter username" required />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />
        <button className="form-button-submit" type="submit">
          Continue
        </button>
      </form>
    </main>
  );
}
