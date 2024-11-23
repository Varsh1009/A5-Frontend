import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="./">Headings and Paragraphs</Link>
        </li>
        <li>
          <Link to="lists">Lists</Link>
        </li>
        <li>
          <Link to="tables">Tables</Link>
        </li>
        <li>
          <Link to="forms">Forms</Link>
        </li>
        <li>
          <Link to="images">Images</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
