import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../Navbar/Navbar.scss";
function Navbar() {
  return (
    <div className="wrapper-navbar">
      <div className="categories">
        <span>
          <FontAwesomeIcon icon={faBorderAll} />
        </span>
        <h4>
          Categories <FontAwesomeIcon icon={faChevronDown} />
        </h4>
      </div>
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
