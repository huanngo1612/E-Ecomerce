import {
  faCartPlus,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import CountdownProduct from "../CountdownProduct/CountdownProduct";
import "../Product/Product.scss";

function Product({ item }) {
  const handleViewDetailProduct = (item) => {
    console.log(item);
  };
  return (
    <div className="product-wapper">
      <div className="product-banner">
        <NavLink
          to={`/product/${item.id}`}
          onClick={() => handleViewDetailProduct(item)}
        >
          <img src={item.image[0]} alt="" />
        </NavLink>
        <div className="product-actions">
          <button className="btn-action">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="btn-action">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn-action">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="btn-action">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
      <div className="product-content">
        <div className="product-category">{item.category}</div>
        <div className="product-name">{item.name}</div>
        <div className="product-rating">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="product-price">
          {item.price}
          <sup>đ</sup>
          <CountdownProduct />
        </div>
      </div>
    </div>
  );
}

export default Product;
