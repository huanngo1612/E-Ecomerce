import {
  faBagShopping,
  faCartPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NoImage from "../../assets/images/NoImage.jpg";

function Admin() {
  return (
    <div className="profile-wrapper">
      <img className="img-profile" src={NoImage} alt="" />
      <div className="name-profile">Huan Ngo</div>
      <div className="email-profile">huan@gmail.com</div>
      <Link className="link-profile" to="/admin/products">
        <FontAwesomeIcon icon={faBagShopping} />
        <p>Products</p>
      </Link>
      <Link className="link-profile" to="/admin/addcategory">
        <FontAwesomeIcon icon={faList} />
        <p>Categories</p>
      </Link>
      <Link className="link-profile" to="/admin/addproduct">
        <FontAwesomeIcon icon={faCartPlus} />
        <p>Add Product</p>
      </Link>
    </div>
  );
}

export default Admin;
