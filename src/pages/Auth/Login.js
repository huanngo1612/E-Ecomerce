import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import loginImg from "../../assets/images/login.png";
import Helmet from "../../components/Helmet/Helmet";
import Loading from "../../components/Loading/Loading";

import { login } from "../../Redux/Actions/UserAction";
import "../Auth/Auth.scss";

function Login() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(login(emailRef.current.value, passwordRef.current.value));
  };
  return (
    <Helmet title="Login">
      <section className="auth">
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <Row>
              <Col lg="6" className="m-auto text-center">
                <div className="login-img">
                  <img src={loginImg} alt="" />
                </div>
              </Col>
              <Col lg="6">
                <div className="form">
                  <h2>Login</h2>
                  <Form>
                    {error && <label>{error}</label>}

                    <FormGroup className="form-group">
                      <input
                        type="text"
                        placeholder="Email"
                        required
                        ref={emailRef}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        ref={passwordRef}
                      />
                    </FormGroup>
                    <button onClick={submitForm}>Login</button>
                    <p>--or--</p>
                  </Form>
                  <button className="btn-google">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>Login
                    with Google
                  </button>
                  <span>
                    <p>
                      Don't you have an account ?
                      <Link to="/register"> Register</Link>
                    </p>
                  </span>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
