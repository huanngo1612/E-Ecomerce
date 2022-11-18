import "../Header/Header.scss";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <header className="wrapper">
      <Search />
      <Navbar />
    </header>
  );
}

export default Header;
