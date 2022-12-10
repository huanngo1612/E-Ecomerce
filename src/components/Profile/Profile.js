import { faTruck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NoImage from "../../assets/images/NoImage.jpg";
import "./Profile.scss";
function Profile() {
  return (
    <div className="profile-wrapper">
      <img className="img-profile" src={NoImage} alt="" />
      <div className="name-profile">Huan Ngo</div>
      <div className="email-profile">huan@gmail.com</div>
      <Link className="link-profile" to="/profile/myprofile">
        <FontAwesomeIcon icon={faUserGear} />
        <p>ProfileSetting</p>
      </Link>
      <Link className="link-profile" to="/profile/orders">
        <FontAwesomeIcon icon={faTruck} />
        <p>Orders List</p>
      </Link>
    </div>
  );
}

export default Profile;
