import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <div id="header-logo">Okoa</div>
      <div id="header-info">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/collector">Collector</NavLink>
        <NavLink to="/buyer">Buyer</NavLink>

        <NavLink to="/disposer">Disposer</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div id="header-forms">
        {/* <NavLink to="/contact">Contact</NavLink> */}
        <NavLink to="/auth">Join Us</NavLink>
      </div>
    </header>
  );
}
