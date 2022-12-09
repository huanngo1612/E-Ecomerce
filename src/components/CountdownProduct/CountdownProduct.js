import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    return (
      <span>
        {days * 25 + hours} hr: {minutes} mn: {seconds}sec
      </span>
    );
  }
};
function CountdownProduct() {
  const expireDate = localStorage.getItem("duration");
  console.log(expireDate);
  return <Countdown date={expireDate} renderer={renderer} />;
}

export default CountdownProduct;
