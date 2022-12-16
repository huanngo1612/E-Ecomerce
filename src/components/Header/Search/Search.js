import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
  faMagnifyingGlass,
  faRightFromBracket,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../../../hooks";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/headless";
import t1 from "../../../assets/images/T1.jpg";
import NoImage from "../../../assets/images/NoImage.jpg";
import "../Search/Search.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Actions/UserAction";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const debounce = useDebounce(searchValue, 500);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandle = () => {
    dispatch(logout());
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    axios
      .get("https://tiktok.fullstack.edu.vn/api/users/search", {
        params: {
          q: debounce,
          type: "less",
        },
      })

      .then((res) => {
        setSearchResult(res.data.data);
        setLoading(false);
      });
  }, [debounce]);

  return (
    <div className="wrapper-search">
      <img src={t1} className="logo" alt="" />
      <div className="search1">
        <HeadlessTippy
          interactive
          onClickOutside={() => setShowResult(false)}
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div tabIndex="-1" {...attrs}>
              <div className="wrapper-tippy">
                <h4 className="search-title">Products</h4>

                {searchResult.map((result) => (
                  <div key={result.id} className="search-result">
                    {result.full_name}
                  </div>
                ))}
              </div>
            </div>
          )}
        >
          <div className="search">
            <input
              placeholder="Search product"
              ref={inputRef}
              value={searchValue}
              spellCheck={true}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setShowResult(true)}
            />
            {!loading && !!searchValue && (
              <button className="clear" onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            {loading && <div className="loading-search"></div>}
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
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
            <Tippy
              interactive
              delay={[0, 1000]}
              offset={[10, 8]}
              placement="bottom-end"
              render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                  <div className="wrapper-tippy">
                    <Link to="/profile/myprofile" className="user-link">
                      <FontAwesomeIcon icon={faUser} className="user-icon" />
                      <h4>Profile </h4>
                    </Link>
                    <span className="user-logout" onClick={logoutHandle}>
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="user-icon"
                      />
                      <h4>Log out</h4>
                    </span>
                  </div>
                </div>
              )}
            >
              <div className="user-menu">
                <h4 className="user-name">Hi, {userInfo.email} </h4>
                <img src={NoImage} className="user-img" alt="" />
              </div>
            </Tippy>
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
