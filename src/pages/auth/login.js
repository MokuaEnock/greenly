import "./auth.css";
import { useState, useEffect } from "react";

export default function Login() {
  return (
    <main className="auth">
      <form id="login">
        <span>Login</span>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <button className="form-button-submit" type="submit">Continue</button>
      </form>
    </main>
  );
}
