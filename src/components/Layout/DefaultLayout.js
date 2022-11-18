import Categories from "../common/Categories/Categories";
import Header from "../common/Header/Header";
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
