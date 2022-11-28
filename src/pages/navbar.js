import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/contact">Events</NavLink>
      <NavLink to="/auth">Events</NavLink>
    </header>
  );
}
