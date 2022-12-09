import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import "./Checkout.scss";
function Checkout() {
  return (
    <Helmet title="Checkout">
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="title-checkout mb-4 fw-bold ">
                Billing Information
              </h6>
              <Form className="billing-form">
                <FormGroup className="form-group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="chechout-cart">
                <h6>
                  Total qty: <span>0</span>
                </h6>
                <h6>
                  Subtotal: <span>0</span>
                </h6>
                <h6>
                  Shipping: <span>0</span>
                </h6>
                <h6>Free Shipping</h6>
                <h4>
                  Total cost: <span>0</span>
                </h4>
                <button className="buy-btn w-100">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
