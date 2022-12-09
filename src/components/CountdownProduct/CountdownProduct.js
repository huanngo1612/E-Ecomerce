import CountDown from "../CountDown/CountDown";

function CountdownProduct() {
  const expireDate = localStorage.getItem("duration");
  console.log(expireDate);
  return <CountDown time={expireDate} />;
}

export default CountdownProduct;
