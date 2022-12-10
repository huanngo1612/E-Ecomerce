import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Layout/ProfileLayout.scss";
import { Container, Row, Col } from "reactstrap";
import Admin from "../Admin/Admin";
function ProflieLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Container>
          <Row>
            <Col lg="4">
              <Admin />
            </Col>
            <Col lg="8">
              <div className="content">{children}</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default ProflieLayout;
