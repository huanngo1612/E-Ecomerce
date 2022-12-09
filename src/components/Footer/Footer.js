import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <p className="mt-4">
              dfjasldjsalkdjsaldsjaldsajdlakdjsalkdjsaldkjs
              adadasdsadsadaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaa
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick_link">
              <h3 className="quick_link-title">Top Categoies</h3>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Home</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">About</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/contact">Contact</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quick_link">
              <h3 className="quick_link-title">Useful Links</h3>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Home</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">About</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/contact">Contact</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quick_link">
              <h3 className="quick_link-title ">Contact</h3>
              <ListGroup className="footer-contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>DHSPKT</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>0905383161</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>20110489@student</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
