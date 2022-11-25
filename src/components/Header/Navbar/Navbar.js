import { Link, useLocation } from "react-router-dom";

import "../Navbar/Navbar.scss";
const mainNav = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
function Navbar() {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  return (
    <div className="wrapper-navbar">
      <div className="navlink">
        <ul className="nav">
          {mainNav.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`${index === activeNav ? "active" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
