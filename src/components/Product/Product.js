import {
  faCartPlus,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../Product/Product.scss";

function Product({ item }) {
  const handleViewDetailProduct = (item) => {
    console.log(item);
  };
  return (
    <NavLink
      to={`/product/${item.id}`}
      onClick={() => handleViewDetailProduct(item)}
    >
      <div className="product-wapper">
        <div className="product-banner">
          <img src={item.img} alt="" />
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
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
