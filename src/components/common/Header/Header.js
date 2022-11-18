import { Link } from "react-router-dom";
import t1 from "../../../assets/images/T1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../Header/Header.scss";
function Header() {
  return (
    <header className="wrapper">
      <img src={t1} className="logo" alt="" />
      <div>
        <ul className="navbar">
          <li>
            <Link to="/category">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
