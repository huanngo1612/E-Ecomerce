import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import t1 from "../../../assets/images/T1.jpg";
import NoImage from "../../../assets/images/NoImage.jpg";
import "../Search/Search.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthConext } from "../../../context/AuthContext";
function Search() {
  const { currentUser, logout } = useContext(AuthConext);
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
          {currentUser ? (
            <div className="user-menu">
              <img src={NoImage} className="user-img" alt="" />
              <h4 className="user-name">Hi, {currentUser.email} </h4>
              <ul className="user-menu-item">
                <li className="">
                  <Link to="/profile">Profile </Link>
                </li>
                <li className="select-input-item">
                  <span className="user-logout" onClick={() => logout()}>
                    Log out
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <div className="user-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span className="user-text"> Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
