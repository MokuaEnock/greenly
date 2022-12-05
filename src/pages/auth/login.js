import "./auth.css";
export default function Login() {
  return (
    <main className="auth">
      <form id="login">
        <span>Login</span>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <button type="submit">Continue</button>
      </form>
    </main>
  );
}