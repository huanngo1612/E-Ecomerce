import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import registerImg from "../../assets/images/register.png";
import "../Auth/Auth.scss";

import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/UserAction";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error1, setError1] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  useEffect(() => {
    if (error) {
      setError1(error);
    }
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate, error]);
  const submitForm = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError1("Password does not match");
    }

    dispatch(register(emailRef.current.value, passwordRef.current.value));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Helmet title="Register">
      <section className="auth">
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <Row>
              <Col lg="4" className="m-auto text-center">
                <div className="register-img">
                  <img src={registerImg} alt="" />
                </div>
              </Col>
              <Col lg="4" className="m-auto text-center">
                <div className="form">
                  <h2>Register</h2>
                  <Form>
                    {error1 && <label>{error1}</label>}
                    <FormGroup className="form-group">
                      <input
                        type="text"
                        placeholder="Email"
                        required
                        ref={emailRef}
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        ref={passwordRef}
                      />
                      <span onClick={handleShowPassword}>
                        <FontAwesomeIcon
                          className="icon-eyes"
                          icon={showPassword ? faEye : faEyeSlash}
                        />
                      </span>
                    </FormGroup>

                    <FormGroup className="form-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        required
                        ref={confirmPasswordRef}
                      />
                      <span onClick={handleShowConfirmPassword}>
                        <FontAwesomeIcon
                          className="icon-eyes"
                          icon={showConfirmPassword ? faEye : faEyeSlash}
                        />
                      </span>
                    </FormGroup>

                    <button onClick={submitForm}>Register</button>
                  </Form>
                  <span>
                    <p>
                      {" "}
                      You have an account ? <Link to="/login"> Login</Link>
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

export default Register;
