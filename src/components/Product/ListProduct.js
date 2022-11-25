import Product from "./Product";
import "../Product/ListProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Products from "../../data/dataProduct.json";

function ListProduct() {
  return (
    <>
      <div className="filter">
        <span className="filter-label">Sắp xếp theo</span>
        <button className="filter-btn">Phổ biến</button>
        <button className="filter-btn">Mới nhất</button>
        <button className="filter-btn">Bán chạy</button>
        <div className="select-input">
          <span className="select-input-label">Giá</span>
          <FontAwesomeIcon icon={faChevronDown} />
          <ul className="select-input-list">
            <li className="select-input-item">
              <a href="" className="select-input-link">
                Giá: Thấp đến cao
              </a>
            </li>
            <li className="select-input-item">
              <a href="" className="select-input-link">
                Giá: Cao đến thấp
              </a>
            </li>
          </ul>
        </div>
        <div className="filter-page">
          <span className="page-num">
            <span className="page-current">1</span>/14
          </span>
          <div className="page-control">
            <a href="#" className="page-button">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#" className="page-button">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </div>
      <div className="products">
        {Products.map((item, id) => (
          <Product item={item} key={id} />
        ))}
      </div>
    </>
  );
}

export default ListProduct;
