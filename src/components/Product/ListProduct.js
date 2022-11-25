import Product from "./Product";
import "../Product/ListProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Products = [
  {
    id: 1,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/92/63/9d/7c3f506a1a09af15f97a371e305a43e8.jpg.webp",
    category: "Giày",
    name: "Giày thể thao nam",
    price: 12000,
  },
  {
    id: 2,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/b6/7c/1e/ba84322fee7bbb017dfa58212d526758.PNG.webp",
    category: "Balo",
    name: "Balo tiki",
    price: 20000,
  },
  {
    id: 3,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/44/84/b5/99190012171edee77674793a61c5a7e8.png.webp",
    category: "Máy tính bảng",
    name: "Máy tính bảng",
    price: 3000,
  },
  {
    id: 4,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/07/9e/84/2ff0d00e2b21dbb8139a794487e3a0fa.jpg.webp",
    category: "Bàn",
    name: "Bàn văn phòng",
    price: 120000,
  },
  {
    id: 5,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/44/84/b5/99190012171edee77674793a61c5a7e8.png.webp",
    category: "Máy tính bảng",
    name: "Máy tính bảng",
    price: 30000,
  },
];

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
