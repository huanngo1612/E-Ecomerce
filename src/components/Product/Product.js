import {
  faCartPlus,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import cat10 from "../../assets/images/cat10.png";
import "../Product/Product.scss";
function Product() {
  return (
    <div className="product-wapper">
      <div className="product-banner">
        <img src={cat10} />
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
        <Link to="/" className="product-category">
          Jacket
        </Link>
        <Link to="/">Ao thun</Link>
        <div className="product-rating">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="product-price">12.000</div>
      </div>
    </div>
  );
}

export default Product;
