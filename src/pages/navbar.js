import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/">Events</NavLink>
    </header>
  );
}
