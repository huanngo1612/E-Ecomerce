import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
  faMagnifyingGlass,
  faRightFromBracket,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import t1 from "../../../assets/images/T1.jpg";
import NoImage from "../../../assets/images/NoImage.jpg";
import "../Search/Search.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Actions/UserAction";
function Search() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandle = () => {
    dispatch(logout());
  };
  return (
    <div className="wrapper-search">
      <img src={t1} className="logo" alt="" />
      <div className="search">
        <input placeholder="Search product" />
        <button className="clear">
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <FontAwesomeIcon className="loading-search" icon={faSpinner} />
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
          {userInfo ? (
            <div className="user-menu">
              <h4 className="user-name">Hi, {userInfo.email} </h4>
              <img src={NoImage} className="user-img" alt="" />
              <ul className="user-menu-item">
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <Link to="/profile/myprofile">Profile </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span className="user-logout" onClick={logoutHandle}>
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
