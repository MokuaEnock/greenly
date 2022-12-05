export default function Auth() {
  return (
    <main className="auth">
      <form id="login">
        <span>Get Started</span>
        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />
        <button className="form-button-submit" type="submit">Continue</button>
      </form>
    </main>
  );
}
