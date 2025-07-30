import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/add-goal" className="nav-link">Add Goal</NavLink>
    </nav>
  );
}

export default NavBar;
