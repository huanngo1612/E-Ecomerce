import Categories from "../Categories/Categories";
import Header from "..//Header/Header";
import "../Layout/DefaultLayout.scss";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Categories />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
