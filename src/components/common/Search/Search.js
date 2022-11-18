import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import t1 from "../../../assets/images/T1.jpg";
import "../Search/Search.scss";
import { Link } from "react-router-dom";
function Search() {
  return (
    <div className="wrapper-search">
      <img src={t1} className="logo" alt="" />
      <div className="search">Search</div>
      <div className="cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Search;
