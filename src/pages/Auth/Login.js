import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import "../Auth/Auth.scss";
function Login() {
  return (
    <section className="auth">
      <div className="login-img">
        <img src={loginImg} alt="" />
      </div>
      <div className="form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button text>Login</button>
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
