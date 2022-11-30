import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { AuthConext } from "../../context/AuthContext";
import "../Auth/Auth.scss";
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthConext);

  const submitForm = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Invalid Login");
    }
  };
  return (
    <section className="auth">
      <div className="login-img">
        <img src={loginImg} alt="" />
      </div>
      <div className="form">
        <h2>Login</h2>
        <form>
          {error && <label>{error}</label>}
          <input type="text" placeholder="Email" required ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <button onClick={submitForm}>Login</button>
          <p>--or--</p>
        </form>
        <button className="btn-google">
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>Login with Google
        </button>
        <span>
          <p>
            Don't you have an account ?<Link to="/register"> Register</Link>
          </p>
        </span>
      </div>
    </section>
  );
}

export default Login;
