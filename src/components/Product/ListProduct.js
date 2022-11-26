import Product from "./Product";
import "../Product/ListProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Products from "../../data/dataProduct.json";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

function ListProduct() {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [postsPerPage, setPostPerPage] = useState(5); // Số sản phẩm trên 1 trang
  const totalPosts = Products.length; // Tổng số sản phẩm
  let totalPages = Math.ceil(totalPosts / postsPerPage); // Tổng số trang

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Products.slice(firstPostIndex, lastPostIndex); // Các sản phẩm của một trang

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
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
            <span className="page-current">{currentPage} </span> / {totalPages}
          </span>
          <div className="page-control">
            <button
              className="page-button"
              onClick={handlePrev}
              disabled={currentPage === 1 ? true : false}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="page-button"
              onClick={handleNext}
              disabled={currentPage === totalPages ? true : false}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="products">
        {currentPosts.map((item, id) => (
          <Product item={item} key={id} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default ListProduct;
