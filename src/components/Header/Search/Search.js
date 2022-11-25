import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import t1 from "../../../assets/images/T1.jpg";
import "../Search/Search.scss";
import { Link } from "react-router-dom";
function Search() {
  return (
    <div className="wrapper-search">
      <img src={t1} className="logo" alt="" />
      <div className="search">
        <input placeholder="Search product" />
        <button className="clear">
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <FontAwesomeIcon className="loading" icon={faSpinner} />
        <button className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="action">
        <div className="cart">
          <Link to="/cart">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>0</span>
            </div>
            <span className="cart-text"> Cart</span>
          </Link>
        </div>
        <div className="user">
          <Link to="/login">
            <div className="user-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="user-text"> Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
