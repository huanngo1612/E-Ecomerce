import Header from "..//Header/Header";
import "../Layout/DefaultLayout.scss";

import Footer from "../Footer/Footer";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container1">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
