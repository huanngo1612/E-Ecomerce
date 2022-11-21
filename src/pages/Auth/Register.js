import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register.png";
import "../Auth/Auth.scss";
function Register() {
  return (
    <section className="auth">
      <div className="register-img">
        <img src={registerImg} alt="" />
      </div>
      <div className="form">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button text>Register</button>
        </form>
        <span>
          <p>
            {" "}
            You have an account ? <Link to="/login"> Login</Link>
          </p>
        </span>
      </div>
    </section>
  );
}

export default Register;
