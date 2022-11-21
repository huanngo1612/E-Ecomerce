import { Link } from "react-router-dom";

import "../Navbar/Navbar.scss";
function Navbar() {
  return (
    <div className="wrapper-navbar">
      <div className="navlink">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
