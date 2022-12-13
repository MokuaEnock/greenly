import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ setLog, log, onLogin }) {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    fetch("https://okoa-production.up.railway.app/signup", {
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
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate("/disposer");
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(errors);
        });
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

        <span className="error-cont">
          {errors.map((error) => {
            return <p className="errors">{error}</p>;
          })}
        </span>

        <button className="form-button-submit" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div></div>
    </main>
  );
}
