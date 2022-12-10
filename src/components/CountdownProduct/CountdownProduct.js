import CountDown from "../CountDown/CountDown";

function CountdownProduct() {
  const expireDate = localStorage.getItem("duration");
  return <CountDown time={expireDate} />;
}

export default CountdownProduct;
