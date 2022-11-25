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
  console.log(activeNav);

  return (
    <div className="wrapper-navbar">
      <div className="navlink">
        <ul className="nav">
          {mainNav.map((item, index) => (
            <li
              key={index}
              className={`${index === activeNav ? "active" : ""}`}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
