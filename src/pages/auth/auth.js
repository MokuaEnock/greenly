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
    fetch("http://localhost:3000/users", {
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
          console.log("success", user)
          setUsername("")
          setEmail("")
          setPassword("")
          setPasswordConfirmation("")
          navigate("/redirect");
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
        <span className="login-title">
          <span id="title">Welcome to Okoa</span>
          <span id="words">Please enter your details</span>
        </span>

        <span className="user-fields">
          <label>User-name</label>
          <input
            type="text"
            placeholder="Enter username"
            autoComplete="on"
            // required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>

        <span className="user-fields">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            // required
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <span className="user-fields">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="on"
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>

        <span className="user-fields">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            // required
            autoComplete="on"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </span>

        <span className="error-cont">
          {errors.map((error) => {
            return <p className="errors">{error}</p>;
          })}
        </span>

        <button className="form-button-submit" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div id="form-div">gghfhhf</div>
    </main>
  );
}
