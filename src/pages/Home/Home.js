import Categories from "../../components/Categories/Categories";
import Helmet from "../../components/Helmet/Helmet";
import ListProduct from "../../components/Product/ListProduct";
import "./Home.scss";

function Home() {
  return (
    <Helmet title="Home">
      <div className="home">
        <Categories />
        <div>
          <ListProduct />
        </div>
      </div>
    </Helmet>
  );
}

export default Home;
