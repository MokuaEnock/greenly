import "./auth.css";
import { useState } from "react";
// import Disposer from "../disposer/Disposer";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  let [username, setUsername] = useState("");
  // let [email, setEmail] = useState("");
  // let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000//auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          console.log("success", user);
        });
        navigate(`/disposer`);
      } else {
        console.log("Fail ");
        // r.then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <main className="auth" onSubmit={handleSubmit}>
      <form id="login">
        <span className="login-title">
          <span id="title">Welcome back</span>
          <span id="words">Please enter your details</span>
        </span>

        <span className="user-fields">
          <label>User-name</label>
          <input
            type="text"
            autoComplete="on"
            required
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span className="user-fields">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>

        <span className="error-cont">
          {errors.map((error) => {
            return <p className="errors">{error}</p>;
          })}
        </span>
        <button className="form-button-submit" type="submit">
          {isLoading ? "Log In" : "Login"}
        </button>
      </form>

      <div id="form-div">gghfhhf</div>
    </main>
  );
}
