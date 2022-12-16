import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, FormGroup, Row, Col, Label } from "reactstrap";
import Helmet from "../../Helmet/Helmet";
import "./AdminCategory.scss";

function AdminCategory() {
  return (
    <Helmet title="Admin Categories">
      <section>
        <Container>
          <Row>
            <Col lg="4">
              <FormGroup className="form-group">
                <Label>Tên</Label>
                <input type="text" placeholder="Mô tả sản phẩm" required />
              </FormGroup>
              <FormGroup className="form-group">
                <input id="file" type="file" />
              </FormGroup>
              <button className="btn-add-product">Thêm</button>
            </Col>
            <Col lg="8">
              <FormGroup className="form-group">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Men clothes</td>
                      <td>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Men clothes</td>
                      <td>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Men clothes</td>
                      <td>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Men clothes</td>
                      <td>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="btn-category">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AdminCategory;
