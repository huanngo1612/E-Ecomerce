import { Container, FormGroup, Row, Col, Label } from "reactstrap";
import Helmet from "../../Helmet/Helmet";

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
                    <td class="text-end"></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AdminCategory;
