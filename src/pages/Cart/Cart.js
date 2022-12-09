import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.scss";
function Cart() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://i.ibb.co/80yP4KY/airpod.jpg"
                alt=""
                className="img-product"
              />
            </td>
            <td>Airpod</td>
            <td>300000</td>
            <td>2</td>
            <td>
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
