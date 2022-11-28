import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <div id="header-logo"></div>
      <div id="header-info">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/process">Process</NavLink>
        <NavLink to="/events">Events</NavLink>
      </div>
      <div id="header-forms">
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/auth">Log In</NavLink>
      </div>
    </header>
  );
}
