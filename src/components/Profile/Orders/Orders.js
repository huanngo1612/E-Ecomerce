import Helmet from "../../Helmet/Helmet";
import "./Orders.scss";
function Orders() {
  return (
    <Helmet title="My Order">
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
        </table>
      </div>
    </Helmet>
  );
}

export default Orders;
