import "./Header.scss";
import Search from "../Header/Search/Search";
import Navbar from "../Header/Navbar/Navbar";
function Header() {
  return (
    <header className="wrapper-header">
      <Search />
      <Navbar />
    </header>
  );
}

export default Header;
