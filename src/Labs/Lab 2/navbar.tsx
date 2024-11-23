import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="./">CSS Practice</Link>
        </li>
        <li>
          <Link to="icons">React Icons</Link>
        </li>
        <li>
          <Link to="bootstrap">Bootstrap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
