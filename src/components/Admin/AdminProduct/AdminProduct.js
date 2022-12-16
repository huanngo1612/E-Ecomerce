import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Products from "../../../data/dataProduct.json";
import Helmet from "../../Helmet/Helmet";
import Pagination from "../../Pagination/Pagination";
import Product from "../../Product/Product";
import "./AdminProduct.scss";

function AdminProduct() {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  // eslint-disable-next-line
  const [postsPerPage, setPostPerPage] = useState(4); // Số sản phẩm trên 1 trang
  const totalPosts = Products.length; // Tổng số sản phẩm
  let totalPages = Math.ceil(totalPosts / postsPerPage); // Tổng số trang

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Products.slice(firstPostIndex, lastPostIndex); // Các sản phẩm của một trang
  return (
    <Helmet title="Admin Products">
      <section>
        <Container>
          <Row>
            {currentPosts.map((item, id) => (
              <Col xl="3" lg="4" md="4" sm="6" key={id}>
                <Product item={item} key={id} />
                <div className="text-end">
                  <Link
                    to={`/admin/products/${item.id}/edit`}
                    className="btn-product"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <button className="btn-product">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </Col>
            ))}
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AdminProduct;
