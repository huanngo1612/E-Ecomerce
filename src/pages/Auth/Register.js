import { Link, Navigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import registerImg from "../../assets/images/register.png";
import "../Auth/Auth.scss";
import { AuthConext } from "../../context/AuthContext";
function Register() {
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { register, currentUser } = useContext(AuthConext);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password does not match");
    }
    try {
      await register(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.message);
    }
  };
  return currentUser ? (
    <Navigate to="/" />
  ) : (
    <section className="auth">
      <div className="register-img">
        <img src={registerImg} alt="" />
      </div>
      <div className="form">
        <h2>Register</h2>
        <form>
          {error && <label>{error}</label>}
          <input type="text" placeholder="Email" required ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            ref={confirmPasswordRef}
          />
          <button onClick={submitForm}>Register</button>
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
