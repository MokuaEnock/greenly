import "./auth.css";
import { useState, useEffect } from "react";

export default function Login({ setuser }) {
  let [username, setUsername] = useState("");
  // let [email, setEmail] = useState("");
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      username,
      // email,
      password,
    };

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "applicaton/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setuser);
      } else {
        res.json().then((e) => setErrors(Object.entries(e.error).flat()));
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
          Continue
        </button>
      </form>
    </main>
  );
}
